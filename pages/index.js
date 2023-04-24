import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import designinspo from "../public/img/designinspo.jpeg";
import skiing from "../public/img/skiing.jpeg";
import valhalla from "../public/img/valhalla.jpeg";

export default function Home() {
  return (
    <>
      <Head>
        <title>samjamead.github.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <main>
          <h1>Welcome to Version 9!</h1>

          <div className="grid">
            <Link href="./posts/example" className="card">
              <h3>Example Post &rarr;</h3>
              <p>Read it.</p>
            </Link>
          </div>

          <div className="container">
            <Image
              src={designinspo}
              alt="A nice layout from the New York Times"
            />
            <Image src={skiing} alt="A nice photo by Ben" />
            <Image src={valhalla} alt="A nice view through the clouds" />
          </div>
        </main>
      </div>
    </>
  );
}
