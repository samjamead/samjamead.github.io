import React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import "../styles/main.scss";

export const CategoryContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [category, setCategory] = useState("All");

  const value = {
    category,
    setCategory,
  };

  return (
    <Layout>
      <CategoryContext.Provider value={value}>
        <Component {...pageProps} />
      </CategoryContext.Provider>
    </Layout>
  );
}
