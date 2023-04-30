import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import MainPostList from "../components/blog/mainPostList";
import Hero from "../components/ui/hero";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>samjamead.github.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <MainPostList data={allPostsData} />
    </>
  );
}
