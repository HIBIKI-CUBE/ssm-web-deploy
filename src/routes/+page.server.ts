import type { PageServerLoad } from './$types';
import { getNewsList } from '$lib/microcms/client';

export const load = (async () => {
  return {
    news: (await getNewsList()).contents,
  };
}) satisfies PageServerLoad;
