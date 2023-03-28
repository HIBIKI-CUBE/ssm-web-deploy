import type { LayoutServerLoad } from './$types';
import { getTextDictionary } from '$lib/microcms/client';

export const load = (async () => {
  return {
    dictionary: await getTextDictionary('index'),
  };
}) satisfies LayoutServerLoad;
