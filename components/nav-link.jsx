'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLink({ href, children }) {
	const path = usePathname();
	console.log(href);
	return (
		<Link href={href} className={path.startsWith(href) ? 'active' : undefined}>
			{children}
		</Link>
	);
}
