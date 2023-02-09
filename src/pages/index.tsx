import Layout from "@/components/layout";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import axios from "axios";
import { TPosts } from "@/types";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { NEXT_URL } from "@/utils/all";
type Props = {
  data: TPosts;
};
const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Layout>
        <Container>
          <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
            {data.data.length > 0 &&
              data.data.map((post) => (
                <PostList
                  key={post.id}
                  post={post}
                  aspect="landscape"
                  preloadImage={false}
                />
              ))}
          </div>
        </Container>
        <Container>
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <nav className="flex justify-between">
              <button
                className="cursor-auto disabled:opacity-50"
                disabled={true}
              >
                Previous
              </button>
              <span>1 of {data?.meta?.pagination?.pageCount}</span>
              {data.meta.pagination.pageCount > data.meta.pagination.page ? (
                <Link href={`/page/${data?.meta?.pagination.page + 1}`}>
                  <button>Next</button>
                </Link>
              ) : (
                <button
                  className="cursor-auto disabled:opacity-50"
                  disabled={true}
                >
                  Next
                </button>
              )}
            </nav>
          </div>
        </Container>
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
