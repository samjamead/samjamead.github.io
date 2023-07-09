import { getPostData } from "../../../lib/posts";
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
    <div className="container">
      <div className="breadcrumb">
        <Link href="/">All Posts</Link>
        <span className="divider">&rarr;</span>
        <Link href="/">{postData.category}</Link>
        <span className="divider">&rarr;</span>
        {postData.title}
      </div>

      <article>
        <h1>{postData.title}</h1>
        <p>{postData.date} </p>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

      <hr />

      <p>
        &larr; <Link href="/">Home</Link>
      </p>
    </div>
  );
}
