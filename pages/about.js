import Head from "next/head";
import Link from "next/link";
import Hero from "../components/ui/hero";

export default function About() {
  return (
    <>
      <Head>
        <title>About Sam</title>
      </Head>
      <Hero />

      <div className="container">
        <p>
          This is a secluded, intimate mountain country, where the green of
          grass and the grey of rock blend with the gold of moss and the reddish
          blaeberry leaves. Rocks, ledges and sunny grassy hollows alternate
          with one another. One can play here hide-and-seek with the wind,
          lounge in some sheltered recess, look for mountain flowers, or feed on
          berries.
        </p>
        <p>
          I did none of these things, for I had the 5:40 train to catch at
          Crianlarich. My ascent was a breathless affair, with an eye on the
          watch. The west face of Beinn Chabhair has a terraced configuration,
          the strata running athwart the slope, with alternating bands of soft
          and hard rock which have yielded unequally to erosion. Through these I
          wound my way, and came on one of the rock steps upon two beautiful
          pendants of purple saxifrage, laden with flowers, which were
          festooning the sides of a miniature waterfall. The haze had thinned
          out somewhat and the sun lay hot on a windless calm. (Firsoff)
        </p>

        <hr />

        <p>
          <Link href="/">&larr; &nbsp;Back home</Link>
        </p>
      </div>
    </>
  );
}
