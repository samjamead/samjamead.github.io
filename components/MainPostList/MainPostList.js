import styles from "./MainPostList.module.scss";
import { getSortedPostsData } from "../../lib/posts";
import PostListItem from "./PostListItem/PostListItem";

export default function MainPostList() {
  const postsData = getSortedPostsData();

  return (
    <div className={styles.wrapper}>
      {postsData.map((post) => {
        return (
          <PostListItem
            id={post.id}
            title={post.title}
            date={post.date}
            category={post.category}
          />
        );
      })}
    </div>
  );
}
