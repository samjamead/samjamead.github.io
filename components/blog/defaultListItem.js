import Link from "next/link";

export default function DefaultListItem({ data }) {
  let post = data;
  let path = "/posts/" + data.id;
  return (
    <>
      <p className="post-title">
        <Link href={path}>{post.title}</Link>
      </p>
      {post.preview && (
        <p>
          <span className="small light-text">{post.preview}</span>
        </p>
      )}
    </>
  );
}
