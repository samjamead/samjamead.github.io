import Link from "next/link";

export default function MainPostList({ data }) {
  return (
    <ul className="main-post-list margin-bottom-double">
      {data.map((post) => {
        let path = "/posts/" + post.id;
        let type = post.type;

        if (!type) {
          return (
            <li key={post.id}>
              <p className="post-title">
                <Link href={path}>{post.title}</Link> ({post.date})
              </p>
              {post.preview && (
                <p>
                  <span className="small light-text">{post.preview}</span>
                </p>
              )}
            </li>
          );
        } else if (type === "quote") {
          return (
            <li key={post.id}>
              <p className="post-title">{post.quote}</p>
              <p className="small light-text">{post.attribution}</p>
            </li>
          );
        }
      })}
    </ul>
  );
}
