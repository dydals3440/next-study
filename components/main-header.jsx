import Link from 'next/link';
import { NavLink } from './nav-link';

export function MainHeader() {
	return (
		<header id="main-header">
			<div id="logo">
				<Link href="/">NextNews</Link>
			</div>
			<ul>
				<li>
					{/* href='/news' 이런식으로 클라컴포 분리가능 */}
					<NavLink href="/news">News</NavLink>
				</li>
				<li>
					<NavLink href="/archive">Archive</NavLink>
				</li>
			</ul>
		</header>
	);
}
