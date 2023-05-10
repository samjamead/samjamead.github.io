import { useState } from "react";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import MainPostList from "../components/blog/mainPostList";
import Hero from "../components/ui/hero";
import FilterPosts from "../components/blog/filterPosts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allCategories = getUniqueTypes(allPostsData);
  function getUniqueTypes(postList) {
    let result = [];
    postList.map((post) => {
      let category = post.type;
      if (result.indexOf(category) === -1) {
        result.push(category);
      }
    });
    return result;
  }
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
        return post.type === newCategory;
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
