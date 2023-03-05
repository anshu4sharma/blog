import Layout from "@/components/layout";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import axios from "axios";
import { TPosts } from "@/types";
import { GetStaticProps, NextPage } from "next";
import { NEXT_URL, relValidateTimer } from "@/utils/all";
import Pagination from "@/components/Pagination";
import Script from "next/script";
type Props = {
  data: TPosts;
};
const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      {/* <Script id="ansh" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4780451799247980"
        crossOrigin="anonymous" />
      <ins className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-ch-1c+5-13+cj"
        data-ad-client="ca-pub-4780451799247980"
        data-ad-slot="3220860400"></ins>
      <Script id="pushAdd">
        (adsbygoogle = window.adsbygoogle || []).push({ });
      </Script> */}
      <Layout>
        <Container>
          <div className="grid gap-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
            {data.data.length > 0 &&
              data.data.map((post) => (
                <PostList
                  key={post.id}
                  post={post}
                />
              ))}
          </div>
        </Container>
        <Pagination data={data.meta} />
      </Layout>
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(
    `${NEXT_URL}/api/posts?populate=*&pagination[page]=1&pagination[pageSize]=10&sort=createdAt:desc`
  );
  return {
    props: { data: data },
    revalidate: relValidateTimer,
  };
};
