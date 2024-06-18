import { NextResponse } from 'next/server';

// 수신하는 요청을, 차단하거나 처리 가능. 이 함수의 본래 목적
// 수신하는 요청 살펴보고, 변경하거나 차단해서, 인증을 구현하고 다른 페이지로 redirection
// 사용자가 인증되지 않았으면 redirect
// 미들웨어는  페이지 라우트 등, 전체 웹사이트로 전송된 요청에서, 실행할 코드를 설정하도록 허용
// 그래서 해당 요청 블록을 검사, 리디렉션 할 수 있음.
// 이렇게 설정하고 저장한뒤
export function middleware(request) {
	// NextResponse.redirect()
	console.log(request);
	return NextResponse.next();
}

// config라는 이름의 변수또는 상수 객채여야함
// 여기서 matcher property 설정가능
// 미들웨어를 트리거하는 요청을 필터링하도록함.
// /news 필터링
export const config = {
	matcher: '/news',
};
