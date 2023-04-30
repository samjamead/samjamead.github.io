import Image from "next/image";
import designinspo from "../../public/img/designinspo.jpeg";
import skiing from "../../public/img/skiing.jpeg";
import valhalla from "../../public/img/valhalla.jpeg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner margin-bottom">
          <p>Bottom</p>
        </div>
        <div className="flexbox">
          <div className="flex-third">
            <Image
              src={designinspo}
              alt="A nice layout from the New York Times"
            />
          </div>
          <div className="flex-third">
            <Image src={skiing} alt="A nice photo by Ben" />
          </div>
          <div className="flex-third">
            <Image src={valhalla} alt="A nice view through the clouds" />
          </div>
        </div>
      </div>
    </footer>
  );
}
