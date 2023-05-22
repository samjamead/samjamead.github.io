import { useState, useEffect } from "react";
import supabase from "../../lib/supabaseClient";

export default function Hero() {
  const [data, setData] = useState(null);

  async function getQuotes() {
    const { data, error } = await supabase.from("page_meta").select();

    if (error) {
      console.log(error);
    }

    if (data) {
      let randomIndex = Math.floor(Math.random() * data.length);

      console.log(data[randomIndex]); // outputs a random index from the array

      setData(data[randomIndex]);
    }
  }

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="hero">
      {data && (
        <h1>
          {data.content} <br />
          <span className="small light-text">{data.quote_attribution}</span>
        </h1>
      )}
    </div>
  );
}
