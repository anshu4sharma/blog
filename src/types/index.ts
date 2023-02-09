export type TPosts = {
  data: TPost[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type SinglePost = {
  data: {
    data: Omit<TPost, "thumbnail">;
  };
};

export type TPost = {
  id: number;
  attributes: TAttributes;
};

export type TAttributes = {
  title: string;
  description: string;
  author: string;
  label: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  thumbnail: Tthumbnail;
  categoryColor: string;
  keywords: string | null;
};

export type Tthumbnail = {
  data: TthumbnailData;
};

export type TthumbnailData = {
  id: number;
  attributes: ThumbnailAttributes;
};

export type ThumbnailAttributes = {
  name: string;
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  createdAt: string;
  updatedAt: string;
  blurhash: string;
  provider_metadata: Tprovider_metadata;
  formats: Thumbnailformats;
};

export type Tformat = Pick<
  ThumbnailAttributes,
  "ext" | "name" | "hash" | "mime" | "url" | "height" | "width" | "size"
> &
  Tprovider_metadata & {
    path: null | string;
  };

export type Thumbnailformats = {
  thumbnail?: Tformat;
  large?: Tformat;
  small?: Tformat;
  medium?: Tformat;
};

export type Tprovider_metadata = {
  public_id: string;
  resource_type: string;
};
