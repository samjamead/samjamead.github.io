import Image from "next/image";

export default function ({ data, icon, children }) {
  return (
    <li key={data.id} className="list-item-wrapper">
      <div className="list-item-icon">
        <Image src={icon} alt="New post" />
      </div>
      <div className="list-item-inner">
        <div className="list-item-header">
          <div>
            <p className="list-item-date monospaced">{data.date}</p>
          </div>
          <div>
            <span className="list-item-category">
              {data.category ? data.category : "Post"}
            </span>
          </div>
        </div>
        {children}
      </div>
    </li>
  );
}
