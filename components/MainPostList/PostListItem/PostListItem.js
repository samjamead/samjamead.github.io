import Link from "next/link";
import styles from "./PostListItem.module.scss";

export default function PostListItem({ id, title, date, category }) {
  let post_url = `/posts/${id}`;

  return (
    <>
      <div className={styles.wrapper}>
        <p>
          {date} • <Link href={post_url}>{title}</Link>
        </p>
      </div>
    </>
  );
}
