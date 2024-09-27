export interface IBlogData {
  id: number;
  metatitle: string;
  metadescription: string;
  title: string;
  body: string;
  date: string;
  category: {
    id: number;
    name: string;
    locale: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
  year: {
    id: number;
    year: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
  slug: string;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  featuredimage: {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        width: number;
        height: number;
        size: number;
        path: null;
        url: string;
      };
      large: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        width: number;
        height: number;
        size: number;
        path: null;
        url: string;
      };
      medium: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        width: number;
        height: number;
        size: number;
        path: null;
        url: string;
      };
      small: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        width: number;
        height: number;
        size: number;
        path: null;
        url: string;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    created_at: string;
    updated_at: string;
  };
  localizations: {
    id: number;
    locale: string;
    published_at: string;
  }[];
}
