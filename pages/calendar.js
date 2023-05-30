import Head from "next/head";
import CalendarView from "../lib/d3calendar";
import calendardata from "../data/calendardata.json";

export default function WhereDidYouSleep() {
  const xAccessor = (d) => new Date(d.Date);
  const yAccessor = (d) => d.Volume;
  return (
    <>
      <Head>
        <title>2023 Calendar</title>
      </Head>

      <div className="container">
        <h1>Calendar</h1>
        <CalendarView data={calendardata} x={xAccessor} y={yAccessor} />
      </div>

      <div className="container">
        <p>
          19 Jan 2038 at 3:14:07 AM (End of the word according to Unix–2^32
          seconds after January 1, 1970) The only people who have anything to
          fear from free software are those whose products are worth even less.
          (David Emery) Any code of your own that you haven’t looked at for six
          or more months might as well have been written by someone else.
          (Eagleson’s Law) The best thing about a boolean is even if you are
          wrong, you are only off by a bit. (Anonymous) There are only two
          industries that refer to their customers as ‘users’. (Edward Tufte) To
          err is human, but to really foul things up you need a computer. (Paul
          Ehrlich) Computers are getting smarter all the time. Scientists tell
          us that soon they will be able to talk to us. (And by ‘they’, I mean
          ‘computers’. I doubt scientists will ever be able to talk to us.)
          (Dave Barry) Complexity kills. It sucks the life out of developers, it
          makes products difficult to plan, build and test, it introduces
          security challenges, and it causes end-user and administrator
          frustration. (Ray Ozzie) Always code as if the guy who ends up
          maintaining your code will be a violent psychopath who knows where you
          live. (Martin Golding) Any fool can use a computer. Many do. (Ted
          Nelson) Computers are like bikinis. They save people a lot of
          guesswork. (Sam Ewing) For a long time it puzzled me how something so
          expensive, so leading edge, could be so useless. And then it occurred
          to me that a computer is a stupid machine with the ability to do
          incredibly smart things, while computer programmers are smart people
          with the ability to do incredibly stupid things. They are, in short, a
          perfect match. (Bill Bryson) It’s ridiculous to live 100 years and
          only be able to remember 30 million bytes. You know, less than a
          compact disc. The human condition is really becoming more obsolete
          every minute. (Marvin Minsky) I’ve finally learned what ‘upward
          compatible’ means. It means we get to keep all our old mistakes.
          (Dennie van Tassel) There’s an old story about the person who wished
          his computer were as easy to use as his telephone. That wish has come
          true, since I no longer know how to use my telephone. (Bjarne
          Stroustrup) There is no reason for any individual to have a computer
          in his home. (Ken Olson, President, Digital Equipment Corporation,
          1977) Good code is its own best documentation. (Steve McConnell)
          Software is like sex: It’s better when it’s free. (Linus Torvalds) It
          is practically impossible to teach good programming style to students
          that have had prior exposure to BASIC. As potential programmers, they
          are mentally mutilated beyond hope of regeneration. (E. W. Dijkstra)
        </p>
      </div>
    </>
  );
}
