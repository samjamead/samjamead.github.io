export default function QuoteListItem({ data }) {
  let post = data;
  return (
    <>
      <p className="post-title">{post.quote}</p>
      <p className="small light-text">{post.attribution}</p>
    </>
  );
}
