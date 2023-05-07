export default function QuoteListItem({ data }) {
  let post = data;
  return (
    <div className="list-item-content">
      <p>{post.quote}</p>
      <p className="small light-text">{post.attribution}</p>
    </div>
  );
}
