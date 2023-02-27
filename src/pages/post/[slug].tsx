import Link from "next/link";
import Layout from "@/components/layout";
import Container from "@/components/container";
import { parseISO, format } from "date-fns";
import { ArticleJsonLd, NextSeo } from "next-seo";
import axios from "axios";
import { TPost, TPosts } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import { NEXT_URL, relValidateTimer } from "@/utils/all";
import Script from "next/script";
type Props = {
  postdata: TPost;
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
        openGraph={{
          title: postdata.attributes.title,
          url: `https://anshusharma.me/post/${postdata.attributes.slug}`,
          images: [
            {
              url: postdata.attributes.thumbnail.data.attributes.url,
              width: 850,
              height: 650,
              alt: 'Profile Photo',
            },
          ],
        }}
        canonical={`https://anshusharma.me/post/${postdata.attributes.slug}`}
        defaultTitle={postdata.attributes.title}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={`https://anshusharma.me/post/${postdata.attributes.slug}`} title={postdata.attributes.title}
        datePublished={postdata.attributes.publishedAt}
        dateModified={postdata.attributes.updatedAt}
        authorName={"Anshu Sharma"} description={postdata?.attributes.title}
        images={[
          postdata.attributes.thumbnail.data.attributes.url
        ]}
        publisherName="Anshu Sharma"
        publisherLogo={"https://blogger.googleusercontent.com/img/a/AVvXsEjwSmfMYNLxV3uTczZ3MjX3HEUcBJbv_1kU6VKRj6BrOQosuHeogzxMpa0YTlxoHKQvS3V81fcZ157OLVJMbNV7iz8kiJINPYdhh_0ZnBBQyRb22Pczckrdv2eM8XBbAiXqQ8LOebS97Upe3LoyjjIFIelWfJsQ0vci0hnR0tsblmYHELA7WcW0tQ1t=s654"}

      />
      <Layout>
        <Container>
          <article className="max-w-screen-md mx-auto ">
            <div className="mx-auto my-3 prose prose-base dark:prose-p:text-white dark:prose-h1:text-white prose-a:text-blue-500 dark:prose-h2:text-white dark:prose-h3:text-white dark:prose-h4:text-white  dark:prose-h5:text-white  dark:prose-h6:text-white">
              <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-left lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
              {postdata?.attributes?.title}
              </h1>
              <ReactMarkdown>
                {postdata?.attributes?.description &&
                  postdata.attributes.description}
              </ReactMarkdown>
            </div>
            <div className="flex justify-center mt-3 space-x-3 text-gray-500 ">
              <div className="my-4">
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={
                      postdata.attributes.createdAt ||
                      postdata.attributes.publishedAt
                    }
                  >
                    {format(
                      parseISO(
                        postdata?.attributes.createdAt ||
                        postdata.attributes.publishedAt
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
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4780451799247980"
              crossOrigin="anonymous" />
            <ins className="adsbygoogle"
              style={{ display: "block", textAlign: "center" }}
              data-ad-layout="in-article"
              data-ad-format="fluid"
              data-ad-client="ca-pub-4780451799247980"
              data-ad-slot="7454156444"></ins>
            <Script id="postads" >
              (adsbygoogle = window.adsbygoogle || []).push({ });
            </Script>
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
    const { data } = await axios.get<TPosts>(`${NEXT_URL}/api/posts?filters[slug][$eq]=${params?.slug}&populate=*`);
    if (data.data.length < 1) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        postdata: data.data[0]
      },
      revalidate: relValidateTimer,
    };
  } catch (err) {
    return { notFound: true };
  }
};
