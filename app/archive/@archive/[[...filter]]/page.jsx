import { NewsList } from '@/components/news-list';
import {
	getAvailableNewsMonths,
	getAvailableNewsYears,
	getNewsForYear,
	getNewsForYearAndMonth,
} from '@/lib/news';
import Link from 'next/link';

export default function FilteredNewsPage({ params }) {
	const filter = params.filter;
	// filter가 정의되있으면 [0]
	// 즉 아래 처럼 요약 가능(filter ? filter[0] : undefined)
	const selectedYear = filter?.[0];
	const selectedMonth = filter?.[1];

	let news;
	let links = getAvailableNewsYears();

	if (selectedYear && !selectedMonth) {
		news = getNewsForYear(selectedYear);
		links = getAvailableNewsMonths(selectedYear);
	}

	if (selectedYear && selectedMonth) {
		news = getNewsForYearAndMonth(selectedYear, selectedMonth);
		links = [];
	}

	let newsContent = <p>No News found for the selected Period</p>;

	if (news && news.length > 0) {
		newsContent = <NewsList news={news} />;
	}

	return (
		<>
			<header id="archive-header">
				<nav>
					<ul>
						{links.map(link => {
							const href = selectedYear
								? `/archive/${selectedYear}/${link}`
								: `/archive/${link}`;

							return (
								<li key={link}>
									<Link href={href}>{link}</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</header>
			{newsContent}
		</>
	);
}