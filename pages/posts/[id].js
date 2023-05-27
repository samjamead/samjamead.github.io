import { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { CategoryContext } from "../_app";

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

export default function Post({ postData }) {
  const { category, setCategory } = useContext(CategoryContext);

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <div className="article-hero">
          <div className="container">
            <span className="breadcrumb">
              <Link href="/">All Posts</Link>
              <span className="divider">&rarr;</span>
              <Link href="/" onClick={() => setCategory(postData.category)}>
                {postData.category}
              </Link>
              <span className="divider">&rarr;</span>
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
              {postData.date} <br />
              The selected category was {category}{" "}
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
