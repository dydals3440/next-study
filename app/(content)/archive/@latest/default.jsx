// 기본적으로 병렬 라우트는 같은 라우팅을 기반으로 화면을 보여줌.
// 즉 현재 @archive -> [year] -> 페이지를 보여주고있음.
// 근데 @latest -> [year]없이 -> 페이지를 보여줌.
// 즉 여기서 에러가 발생 물론, @latest에서 [year] 다이나믹 페이지를 만들어도 됨
// 실제로, 여기는 다이나믹이 필요없고, 현재 모든 최신 글만 보여주면됨. (default.js) 활용!
// 병렬 라우트 default.js를 넣어야함 (page.js 삭제 가능! 겹치면 내용이)
// 표시할 기본 fallback 페이지를 허용.

import { NewsList } from '@/components/news-list';
import { getLatestNews } from '@/lib/news';

//  라우트가 현재 로딩된 경로에 대해 더 구체적인 컨텐츠가 없을 떄
export default async function LatestNewsPage() {
	const latestNews = await getLatestNews();

	return (
		<>
			<h2>Latest News</h2>
			<NewsList news={latestNews} />
		</>
	);
}
