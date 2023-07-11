import styles from "./PostListFilter.module.scss";
import PostListIcon from "../PostListIcon/PostListIcon";

export default function PostListFilter({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <>
      <div className={styles.wrapper}>
        {categories.map((category) => {
          return (
            <div key={category}>
              <PostListIcon category={category} />
              <button>{category}</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
