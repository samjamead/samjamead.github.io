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
            <p>{data.date}</p>
          </div>
          <div>
            <p>{data.type ? data.type : "Post"}</p>
          </div>
        </div>
        {children}
      </div>
    </li>
  );
}
