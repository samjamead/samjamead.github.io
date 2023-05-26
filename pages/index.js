import { useState, useContext } from "react";
import Head from "next/head";
import { getSortedPostsData, getUniqueCategories } from "../lib/posts";
import MainPostList from "../components/blog/mainPostList";
import Hero from "../components/ui/hero";
import FilterPosts from "../components/blog/filterPosts";
import { CategoryContext } from "./_app";

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
  const { category, setCategory } = useContext(CategoryContext);
  const [posts, setPosts] = useState(allPostsData);

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

      <Hero />

      <div id="posts">
        <FilterPosts
          activeCategory={category}
          categories={allCategories}
          filterPosts={filterPosts}
        />

        <MainPostList data={posts} />
      </div>
    </>
  );
}
