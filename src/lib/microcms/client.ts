import { MICROCMS_API_KEY, MICROCMS_SERVICE_DOMAIN } from '$env/static/private';
import { type MicroCMSQueries, createClient } from 'microcms-js-sdk';
import type { EndPoints } from './types';

const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
});

export const getNewsList = async (queries?: MicroCMSQueries) => {
  return await client.get<EndPoints['gets']['news']>({ endpoint: 'news', queries });
};

export const getNewsDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<EndPoints['get']['news']>({
    endpoint: 'news',
    contentId,
    queries,
  });
};

export const getTextDictionary = async (contentId: string, queries?: MicroCMSQueries) => {
  try {
    const res = await client.getListDetail<EndPoints['get']['text']>({
      endpoint: 'text',
      contentId,
      queries,
    });
    const dictAry = res.dictionary;
    const dict: Record<
      string,
      {
        ja: string;
        en: string;
      }
    > = {};
    for (const item of dictAry) {
      dict[item.key] = {
        en: item.en,
        ja: item.ja,
      };
    }
    return dict;
  } catch (e) {
    console.error(e);
    return {};
  }
};
