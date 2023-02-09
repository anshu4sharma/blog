import Layout from "@/components/layout";
import Container from "@/components/container";
import axios from "axios";
import { TPosts } from "@/types";
import { GetStaticProps, NextPage } from "next";
import PostList from "@/components/postlist";

type Props = {
  data: TPosts;
};

const PortFolio: NextPage = () => {
  return (
    <>
      <Layout>
        <Container>
          <h1 className="text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
            Portfolio
          </h1>
          <div className="text-center">
            <p className="mt-2 text-lg">
              See all projects i have ever created.
            </p>
          </div>
          <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
            {/* {data?.data?.length > 0 &&
              data?.data?.map((post) => (
                <PostList
                  key={post.id}
                  post={post}
                  aspect="landscape"
                  preloadImage={false}
                />
              ))} */}
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default PortFolio;

// export const getStaticProps: GetStaticProps = async () => {
//   const { data } = await axios.get(
//     "https://bloganshu.up.railway.app/api/portfolios?populate=*"
//   );
//   return {
//     props: { data: data },
//     revalidate: 60,
//   };
// };
