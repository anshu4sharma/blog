import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import axios from "axios";
import { TPost, TPosts } from "@/types";
import { NEXT_URL, SITE_URL } from "@/utils/all";
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = (await axios.get(`${NEXT_URL}/api/posts`)) satisfies {
    data: TPosts;
  };

  const fields: ISitemapField[] = data?.data.map((link) => ({
    loc: `${SITE_URL}/post/${link.attributes.slug}`,
    lastmod: new Date().toISOString(),
  }));
  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
