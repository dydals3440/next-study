'use client';

import { notFound, useRouter } from 'next/navigation';

import { DUMMY_NEWS } from '@/dummy-news';

export default function InterceptedImagePage({ params }) {
	const router = useRouter();

	const newsItemSlug = params.slug;
	const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsItemSlug);

	if (!newsItem) {
		notFound();
	}

	return (
		<>
			{/* 여기서 실행시키는게 아니므로, router.back으로 뒤로가게 설정 */}
			<div className="modal-backdrop" onClick={router.back} />
			<h1>Intercept</h1>
			<dialog className="modal" open>
				<div className="fullscreen-image">
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				</div>
			</dialog>
		</>
	);
}
