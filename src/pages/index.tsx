import Layout from "@/components/layout";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import axios from "axios";
import { TPosts } from "@/types";
import { GetStaticProps, NextPage } from "next";

type Props = {
  data: TPosts;
};

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Layout>
        <Container>
          <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
            {data.data.length > 0 &&
              data.data
                .slice(0, 2)
                .map((post) => (
                  <PostList
                    key={post.id}
                    post={post}
                    aspect="landscape"
                    preloadImage={false}
                  />
                ))}
          </div>
          <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
            {data.data.length > 0 &&
              data.data
                .slice(2)
                .map((post) => (
                  <PostList
                    key={post.id}
                    post={post}
                    aspect="landscape"
                    preloadImage={false}
                  />
                ))}
          </div>
        </Container>
      </Layout>
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(
    "https://bloganshu.up.railway.app/api/posts?populate=*"
  );
  return {
    props: { data: data },
    revalidate: 60,
  };
};
