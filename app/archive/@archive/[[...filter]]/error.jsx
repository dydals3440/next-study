'use client';

// 에러 컴포넌트는 클라이언트 컴포넌트임.
// 오류는 서버 작동 중 말고도, 클라이언트 사이드에서도 동작할 수 있기에
// 페이지가 로딩되고, 사용자가 페이지를 이용하면서 무엇인가 잘못되면
// 따라서 오류 폴백은 양쪽에서 작동해야함.
// 클라이언트 컴포넌트는, 서버 및 클라이언트 사이드 양쪽에서 작동
// 서버 컴포넌트는 서버사이드에서만 작동
// 그래서 오류 폴백은 클라이언트 컴포넌트여야하며, 파일 상단에 use client를 적어야함.
export default function FilterError({ error }) {
	return (
		<div id="error">
			<h2>An Error Occurred!</h2>
			<p>Invalid Path.{error.message}</p>
		</div>
	);
}
