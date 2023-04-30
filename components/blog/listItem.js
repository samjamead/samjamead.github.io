export default function ({ data, children }) {
  return (
    <li key={data.id} className="list-item-wrapper">
      <div className="list-item-icon"></div>
      <div className="list-item-inner">
        <div className="list-item-header">
          <p>
            {data.type ? data.type : "Post"} &mdash; {data.date}
          </p>
        </div>
        <div className="list-item-content">{children}</div>
      </div>
    </li>
  );
}
