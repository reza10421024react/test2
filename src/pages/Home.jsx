import React from "react";
import Header from "../components/layouts/Header";
import Hero from "../components/layouts/hero";
import ProductsCountainers from "../components/products/ProductsCountainers";
import TopBar from "../components/layouts/TopBar";

function Home() {
  return (
    <div>
      <Header />
      <TopBar />
      <Hero />
      <ProductsCountainers type="" header="پرفروش ترین ها" />
    </div>
  );
}

export default Home;
