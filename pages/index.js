import { useState } from "react";
import Head from "next/head";
import { getSortedPostsData, getUniqueCategories } from "../lib/posts";
import MainPostList from "../components/blog/mainPostList";
import Hero from "../components/ui/hero";
import FilterPosts from "../components/blog/filterPosts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allCategories = getUniqueCategories(allPostsData);

  return {
    props: {
      allPostsData,
      allCategories,
    },
  };
}

export default function Home({ allPostsData, allCategories }) {
  const [posts, setPosts] = useState(allPostsData);
  const [category, setCategory] = useState("All");

  function filterPosts(newCategory) {
    setCategory(newCategory);
    if (newCategory === "All") {
      setPosts(allPostsData);
    } else {
      let filteredList = allPostsData.filter((post) => {
        return post.category === newCategory;
      });
      setPosts(filteredList);
    }
  }

  return (
    <>
      <Head>
        <title>samjamead.github.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        heading="Welcome to Version 9"
        text="It's like earlier versions, just much betterer!"
      ></Hero>

      <div className="flexbox triple-gap">
        <div className="flex-third">
          <FilterPosts
            activeCategory={category}
            categories={allCategories}
            filterPosts={filterPosts}
          />
        </div>
        <div className="flex-rest">
          <MainPostList data={posts} />
        </div>
      </div>
    </>
  );
}
