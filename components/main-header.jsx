import Link from 'next/link';

export function MainHeader() {
	return (
		<header id="main-header">
			<ul id="logo">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/news">News</Link>
				</li>
			</ul>
		</header>
	);
}
