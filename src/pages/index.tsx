import Layout from "@/components/layout";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import axios from "axios";
import { TPosts } from "@/types";
import { GetStaticProps, NextPage } from "next";
import { NEXT_URL } from "@/utils/all";
import Pagination from "@/components/Pagination";
type Props = {
  data: TPosts;
};
const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
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
    `${NEXT_URL}/api/posts?populate=*&pagination[page]=1&pagination[pageSize]=10`
  );
  return {
    props: { data: data },
    revalidate: 60,
  };
};
