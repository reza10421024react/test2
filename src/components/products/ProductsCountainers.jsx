import React from "react";
import { products } from "../../data/data";
import Product from "./Product";

function getProducts(type) {
  switch (type) {
    case "discount":
      return [...products]
        .filter((p) => p.discount > 0)
        .sort((a, b) => b.discount - a.discount);

    case "soldCount":
      return [...products]
        .sort((a, b) => b.soldCount - a.soldCount)
        .slice(0, 20);

    case "rating":
      return [...products].sort((a, b) => b.rating - a.rating).slice(0, 15);

    default:
      return [...products];
  }
}

const ProductsCountainer = ({ type, header }) => {
  const chosenProducts = getProducts(type);

  return (
    <div className="mt-6 bg-gradie p-2 pb-3 bg-[linear-gradient(200deg,var(--primary),#faa)]">
      <h2 className="text-2xl text-white mb-3 text-center">{header}</h2>
      <div className="scrollbar-none flex whitespace-nowrap gap-x-0.5 overflow-x-auto ">
        {chosenProducts.map((p) => (
          <Product product={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCountainer;
