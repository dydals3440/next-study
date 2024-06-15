// 병렬 라우트와 같은 이름으로 있음, archive, latest @앞에 붙인 이름이 레이아웃에 받아와짐
export default function ArchiveLayout({ archive, latest }) {
	return (
		<div>
			<h1>News Archive</h1>
			<section id="archive-filter">{archive}</section>
			<section id="archive-latest">{latest}</section>
		</div>
	);
}
