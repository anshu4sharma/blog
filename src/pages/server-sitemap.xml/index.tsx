import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import axios from "axios";
import { TPost, TPosts } from "@/types";
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = (await axios.get(
    `https://bloganshu.up.railway.app/api/posts`
  )) satisfies { data: TPosts };

  const fields: ISitemapField[] = data?.data.map((link) => ({
    loc: `https://anshusharma.me/post/${link.attributes.slug}`,
    lastmod: new Date().toISOString(),
  }));
  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
