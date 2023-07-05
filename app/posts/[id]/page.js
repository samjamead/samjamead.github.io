import { getAllPostIds, getPostData } from "../../../lib/posts";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id);

  return {
    title: postData.title,
  };
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id);

  return (
    <>
      {/* <Head>
        <title>{postData.title}</title>
      </Head> */}
      <article>
        <div className="article-hero">
          <div className="container">
            <span className="breadcrumb">
              <Link href="/">All Posts</Link>
              <span className="divider">&rarr;</span>
              <Link href="/">{postData.category}</Link>
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
