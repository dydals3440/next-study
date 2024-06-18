// Next.js가 찾는 또 다른 예약어
// Route Handler is a File

export function GET(request) {
	console.log(request);

	return new Response('Hello!');
}

// export function POST() {}
