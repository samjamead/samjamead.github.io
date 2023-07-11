"use client";

import { useState } from "react";
import styles from "./MainPostList.module.scss";
import { getSortedPostsData } from "../../lib/posts";
import PostListItem from "./PostListItem/PostListItem";
import PostListFilter from "./PostListFilter/PostListFilter";

export default function MainPostList() {
  const postsData = getSortedPostsData();

  const categories = [...new Set(postsData.map((post) => post.category))];

  const [activeCategory, setActiveCategory] = useState();

  return (
    <div className={styles.wrapper}>
      <PostListFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {postsData.map((post) => {
        return (
          <PostListItem
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            meta={post}
          />
        );
      })}
    </div>
  );
}
