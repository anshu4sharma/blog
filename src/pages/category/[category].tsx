import Layout from "@/components/layout";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import axios from "axios";
import { Categories, TPosts } from "@/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NEXT_URL, relValidateTimer } from "@/utils/all";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import Pagination from "@/components/Pagination";
import Script from "next/script";
type Props = {
    data: TPosts;
};

const Category: NextPage<Props> = ({ data }) => {
    const router = useRouter();
    if (router?.isFallback) {
        return <Loader />;
    }
    if (data?.meta?.pagination?.page > data?.meta?.pagination?.pageCount) {
        return <Error message="Page not found !" />;
    }
    return (
        <>
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4780451799247980"
                crossOrigin="anonymous"></Script>
            <ins className="adsbygoogle"
                style={{ display: "block", textAlign: "center" }}
                data-ad-client="ca-pub-4780451799247980"
                data-ad-slot="6357525171"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <Script id="category-ads">
                (adsbygoogle = window.adsbygoogle || []).push({ });
            </Script>
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
export default Category;

export const getStaticPaths: GetStaticPaths = async () => {
    const { data }: { data: Categories } = await axios.get(`${NEXT_URL}/api/catergories`);
    let paths = data?.data.map((page) => ({
        params: {
            category: page.attributes.title,
        },
    }));
    return {
        paths,
        fallback: true,
    };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { data } = await axios.get(
        `${NEXT_URL}/api/posts?filters[category][title][$eq]=${params?.category}&populate=*&sort=createdAt:desc`
    );
    return {
        props: { data: data },
        revalidate: relValidateTimer,
    };
};
