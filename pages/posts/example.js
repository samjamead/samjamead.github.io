import Head from "next/head";
import Link from "next/link";

export default function ExamplePost() {
  return (
    <>
      <Head>
        <title>Example Post</title>
      </Head>
      <h1>Example Post</h1>
      <p>
        This is a secluded, intimate mountain country, where the green of grass
        and the grey of rock blend with the gold of moss and the reddish
        blaeberry leaves. Rocks, ledges and sunny grassy hollows alternate with
        one another. One can play here hide-and-seek with the wind, lounge in
        some sheltered recess, look for mountain flowers, or feed on berries.
      </p>
      <p>
        I did none of these things, for I had the 5:40 train to catch at
        Crianlarich. My ascent was a breathless affair, with an eye on the
        watch.
      </p>
      <Link href="/">Back to home</Link>
    </>
  );
}
