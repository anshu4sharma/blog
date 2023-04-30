import Layout from "@/components/layout";
import Container from "@/components/container";
import axios from "axios";
import { TPorftolios } from "@/types";
import { GetStaticProps, NextPage } from "next";
import { NEXT_URL, relValidateTimer } from "@/utils/all";
import PortfolioList from "@/components/PortfolioList";
type Props = {
  data: TPorftolios;
};
const Portfolio: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Layout>
        <Container>
          <div className="grid gap-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
            {data.data.length > 0 &&
              data.data.map((post) => (
                <PortfolioList key={post.id} post={post} />
              ))}
          </div>
        </Container>
      </Layout>
    </>
  );
};
export default Portfolio;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(
    `${NEXT_URL}/api/portfolios?populate=*&sort=updatedAt:desc`
  );
  return {
    props: { data: data },
    revalidate: relValidateTimer,
  };
};
