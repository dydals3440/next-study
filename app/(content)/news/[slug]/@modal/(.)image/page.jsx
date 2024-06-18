import { notFound } from 'next/navigation';

import ModalBackDrop from '@/components/modal-backdrop';
import { getNewsItem } from '@/lib/news';

export default async function InterceptedImagePage({ params }) {
	const newsItemSlug = params.slug;
	const newsItem = await getNewsItem(newsItemSlug);

	if (!newsItem) {
		notFound();
	}

	return (
		<>
			<ModalBackDrop />
			<h1>Intercept</h1>
			<dialog className="modal" open>
				<div className="fullscreen-image">
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				</div>
			</dialog>
		</>
	);
}
