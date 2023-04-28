import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import designinspo from "../public/img/designinspo.jpeg";
import skiing from "../public/img/skiing.jpeg";
import valhalla from "../public/img/valhalla.jpeg";
import { getSortedPostsData } from "../lib/posts";
import MainPostList from "../components/ui/mainPostList";

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

      <h1>Welcome to Version 9!</h1>
      <p>
        What about blogs, quotes, book reviews, etc.. as a series of commits
        where the message describes the article?
      </p>

      <MainPostList data={allPostsData} />

      <div className="flexbox">
        <div className="flex-third">
          <Image
            src={designinspo}
            alt="A nice layout from the New York Times"
          />
        </div>
        <div className="flex-third">
          <Image src={skiing} alt="A nice photo by Ben" />
        </div>
        <div className="flex-third">
          <Image src={valhalla} alt="A nice view through the clouds" />
        </div>
      </div>
    </>
  );
}
