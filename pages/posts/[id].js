import Link from "next/link";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <>
      <article>
        <div className="article-hero">
          <div className="container">
            <span className="badge">
              <Link href="/">Home</Link> {">"} {postData.category} {">"}{" "}
              {postData.title}
            </span>
            <h1>{postData.title}</h1>
            {postData.preview && (
              <p className="article-preview">{postData.preview}</p>
            )}
          </div>
        </div>

        <div className="container article-body">
          <div className="article-aside">
            <p>
              A quick little paragraph here, but for what? To balance the page
              somehow? It should be functional too, non?{" "}
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </article>

      <div className="container">
        <hr />

        <p>
          &larr; <Link href="/">Home</Link>
        </p>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
