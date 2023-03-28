type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type text<T = 'get'> = Structure<
  T,
  {
    /**
     * ページ名
     */
    title?: string;
    /**
     * 翻訳リスト
     */
    dictionary: text_item[];
  }
>;

interface text_item {
  fieldId: 'item';
  /**
   * キー
   */
  key: string;
  /**
   * 説明
   */
  description?: string;
  /**
   * 日本語
   */
  ja: string;
  /**
   * 英語
   */
  en: string;
}
export type news<T = 'get'> = Structure<
  T,
  {
    /**
     * タイトル
     */
    title: string;
    /**
     * 日付
     */
    date: string;
    /**
     * リンク
     */
    link?: string;
  }
>;

export interface EndPoints {
  get: {
    text: text<'get'>;
    news: news<'get'>;
  };
  gets: {
    text: text<'gets'>;
    news: news<'gets'>;
  };
  post: {
    text: text<'post'>;
    news: news<'post'>;
  };
  put: {
    text: text<'put'>;
    news: news<'put'>;
  };
  patch: {
    text: text<'patch'>;
    news: news<'patch'>;
  };
}
