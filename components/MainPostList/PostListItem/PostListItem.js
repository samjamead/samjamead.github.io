import Link from "next/link";
import styles from "./PostListItem.module.scss";

export default function PostListItem({ id, title, date, meta }) {
  let post_url = `/posts/${id}`;
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.date}>
          <p>{date}</p>
        </div>
        <div className={styles.inner}>
          <p>
            {meta.quote ? (
              <span>{meta.quote}</span>
            ) : (
              <Link href={post_url}>{title}</Link>
            )}
          </p>
          {meta.preview && <p>{meta.preview}</p>}
        </div>
      </div>
    </>
  );
}
