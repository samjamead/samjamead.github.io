import styles from "./HomepageHero.module.scss";

export default function HomepageHero() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <p>
          Above the post list on the homepage, one could imagine a short
          introductory paragraph.{" "}
        </p>
      </div>
    </div>
  );
}
