import Image from "next/image";
import SnowIcon from "../../public/img/cloud-snow.svg";
import CalendarIcon from "../../public/img/calendar-range.svg";

export default function ({ data, children }) {
  return (
    <li key={data.id} className="list-item-wrapper">
      <div className="list-item-icon">
        <Image src={CalendarIcon} alt="Weather at the time of posting" />
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
        <div className="list-item-content">{children}</div>
      </div>
    </li>
  );
}
