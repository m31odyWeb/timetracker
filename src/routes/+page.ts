import type { PageLoad } from './$types';

export const load = (() => {
	return {
		data: 'Timetracker.',
	};
}) satisfies PageLoad;
