import Link from "next/link";
import Layout from "@/components/layout";
import Container from "@/components/container";
import { parseISO, format } from "date-fns";
import CategoryLabel from "@/components/blog/category";
import { NextSeo } from "next-seo";
import axios from "axios";
import { SinglePost, TPosts } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import { NEXT_URL } from "@/utils/all";
type Props = {
  postdata: SinglePost;
  status?: number;
};
const Post: FC<Props> = ({ postdata, status }) => {
  /*
  If your fallback is set to true you need to handle the fallback state.
 use this to fix >> Build error occurred
Error: Export encountered errors on following paths:
/post/[slug]
*/
  const router = useRouter();
  if (router?.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <NextSeo
        title={`Anshu Sharma - ${postdata.data.data.attributes.title}`}
        description={postdata.data.data.attributes.title}
        canonical="anshusharma.me/contact"
        openGraph={{
          url: `anshusharma.me/${postdata.data.data.attributes.slug}`,
          title: `Anshu Sharma - ${postdata.data.data.attributes.title}`,
          description: postdata.data.data.attributes.title,
          siteName: "Anshu Sharma",
        }}
      />
      <Layout>
        <Container>
          <div className="max-w-screen-md mx-auto ">
            <div className="flex justify-center">
              <CategoryLabel
                categories={postdata?.data?.data?.attributes?.label}
                color={postdata.data.data.attributes.categoryColor}
              />
            </div>
            <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
              {postdata?.data?.data?.attributes?.title}
            </h1>
          </div>
          <article className="max-w-screen-md mx-auto ">
            <div className="mx-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-500">
              <ReactMarkdown>
                {postdata?.data?.data?.attributes?.description &&
                  postdata.data.data.attributes.description}
              </ReactMarkdown>
            </div>
            <div className="flex justify-center mt-3 space-x-3 text-gray-500 ">
              <div className="my-4">
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={
                      postdata.data.data.attributes.createdAt ||
                      postdata.data.data.attributes.publishedAt
                    }
                  >
                    {format(
                      parseISO(
                        postdata?.data.data.attributes.createdAt ||
                          postdata.data.data.attributes.publishedAt
                      ),
                      "MMMM dd, yyyy"
                    )}
                  </time>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-7 mb-7">
              <Link
                href="/"
                className="px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 "
              >
                ← View all posts
              </Link>
            </div>
          </article>
        </Container>
      </Layout>
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get<TPosts>(`${NEXT_URL}/api/posts`);

  let paths = data?.data?.map((page) => ({
    params: {
      slug: page.attributes.slug,
    },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data } = await axios.get(`${NEXT_URL}/api/posts/${params?.slug}`);
    return {
      props: {
        postdata: { data },
      },
      revalidate: 60,
    };
  } catch (err) {
    return { notFound: true };
  }
};
