import Image from "next/image";

export default function ({ data, icon, children }) {
  return (
    <li key={data.id} className="alt-item-wrapper">
      <Image src={icon} alt="New post" />
      <div className="alt-item-inner">
        <div className="alt-item-header">
          <div>
            <p className="alt-item-date monospaced">{data.date}</p>
          </div>
          <div>
            <span className="alt-item-category">
              {data.category ? data.category : "Post"}
            </span>
          </div>
        </div>
        {children}
      </div>
    </li>
  );
}
