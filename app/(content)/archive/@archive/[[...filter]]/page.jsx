import Link from 'next/link';

import { NewsList } from '@/components/news-list';
import {
	getAvailableNewsMonths,
	getAvailableNewsYears,
	getNewsForYear,
	getNewsForYearAndMonth,
} from '@/lib/news';
import { Suspense } from 'react';

async function FilterHeader({ year, month }) {
	// 연도를 선택하고, 사용가능한 연도에 속해있지 않다면
	const availableYears = await getAvailableNewsYears();
	let links = availableYears;

	if (
		(year && !availableYears.includes(year)) ||
		(month && !getAvailableNewsMonths(year).includes(month))
	) {
		throw new Error('Invalid filter!');
	}

	if (year && !month) {
		links = getAvailableNewsMonths(year);
	}

	if (year && month) {
		links = [];
	}

	return (
		<header id="archive-header">
			<nav>
				<ul>
					{links.map(link => {
						const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

						return (
							<li key={link}>
								<Link href={href}>{link}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}

async function FilteredNews({ year, month }) {
	let news;

	if (year && !month) {
		news = await getNewsForYear(year);
	} else if (year && month) {
		news = await getNewsForYearAndMonth(year, month);
	}

	let newsContent = <p>No News found for the selected Period</p>;

	if (news && news.length > 0) {
		newsContent = <NewsList news={news} />;
	}

	return newsContent;
}

export default async function FilteredNewsPage({ params }) {
	const filter = params.filter;
	// filter가 정의되있으면 [0]
	// 즉 아래 처럼 요약 가능(filter ? filter[0] : undefined)
	const selectedYear = filter?.[0];
	const selectedMonth = filter?.[1];

	return (
		<>
			{/* 로딩 시간이 서로 다르다면 준비된 내용을 즉시 보여ㅁ줌 두개의 서스펜스 경계는 서로 안기다림. */}
			{/* 각 바운더리는 데이터가 준비되면 해당 데이터 보여줌, 데이터가 준비될떄까지 대체화면 */}
			{/* 다른 서스펜스로 감싸진 컴포넌트의 데이터 로드를 기다리지 않음. */}
			<Suspense fallback={<p>Loading filter...</p>}>
				<FilterHeader year={selectedYear} month={selectedMonth} />
			</Suspense>
			{/* 데이터를 가져오는 로직을 OutSource 별도의 리액트 서버 컴포넌트로 옮겨 선택한 연과 월의 데이터를 불러오기 때문에, 
			이전에 언급한 React Suspense 컴포넌트 사용 가능*/}
			{/* 해당 컴포넌트가 데이터를 가져오고 있는지 자동으로 감지 가능. */}
			{/* 그냥 페이지의 loading.js는 전체 페이지 컴포넌트가 데이터를 가져오는 경우에만 대체 화면 교체 */}
			<Suspense fallback={<p>Loading News...</p>}>
				<FilteredNews year={selectedYear} month={selectedMonth} />
			</Suspense>
		</>
	);
}
