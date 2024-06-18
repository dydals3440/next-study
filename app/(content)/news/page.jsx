import { NewsList } from '@/components/news-list';
import { getAllNews } from '@/lib/news';

export default async function NewsPage() {
	// React 서버 컴포넌트가 있기에 가능.
	// DB는 서버에 있음. 이 코드는 클라이언트 측에서 작동하지 않ㅇ므.
	// 클라이언트는 디비에 접근할 수 없고, 보안상의 이유로 접근해서는 안됨.
	// react 서버 컴포넌트에서는 이 코드가 서버에서만 실행되기 떄문에 클라이언트 측에서도 실행되는 클라 컴포넌트와 달리
	// 서버에서만 실행됩니다. 따라서 서버 측 데베에서 안전하게 접근해서 데이터를 가져올 수 있습니다.
	const news = getAllNews();

	return (
		<>
			<h1>News Page</h1>
			<NewsList news={news} />
		</>
	);
}
