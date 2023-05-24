export default function Hero() {
  return (
    <div className="hero">
      <div className="quote-row">
        <h1>
          His whole life had been leading to this point, because that's famously
          how time works{" "}
          <span className="small light-text">Terry Pratchet</span>
        </h1>
      </div>
      <div className="intro-row">
        <div>
          <p>
            <em>Sigh</em>... it's always difficult taking inspiration from
            print. For some reason, what looks good on a physical page rarely
            translates well to the web. I suspect I won't stop trying, though.
          </p>
        </div>
        <div>
          <p>
            A developer's personal website is often just a place to hack around
            with new stuff, and this one is no exception! Here I'm playing with{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>
            ,{" "}
            <a href="https://supabase.com/" target="_blank">
              Supabase
            </a>
            , and{" "}
            <a href="https://mdxjs.com/" target="_blank">
              MDX
            </a>{" "}
            to build something fast.{" "}
          </p>
        </div>
        <div>
          <p>
            If you find that you get to the third column and it's hard to the
            character count spot on, you are likely not alone. But hey, you know
            what? I think it does actually kind of work!
          </p>
        </div>
      </div>
    </div>
  );
}
