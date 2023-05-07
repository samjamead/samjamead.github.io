import Link from "next/link";

export default function BookListItem({ data }) {
  let post = data;
  let path = "/posts/" + data.id;
  return (
    <Link href={path} className="list-item-content">
      <p className="post-title">{post.title}</p>
      <p className="small light-text">{post.author}</p>
      {post.preview && <p className="small light-text">{post.preview}</p>}
    </Link>
  );
}
