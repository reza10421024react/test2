import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/data";
import Header from "../components/layouts/Header";
import AddToCartBtn from "../components/products/AddToCartBtn";
import Rating from "../components/products/Rating";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const finalPrice = ((product.price * (100 - product.discount)) / 100).toLocaleString();

  return (
    <div className="h-screen pt-25 bg-[#ffe7f4]">
      <Header />

      <div className="h-full flex flex-col items-center mx-auto p-8 pb-0 pt-8 max-w-105 bg-white shadow-xl">
        <div>
          <img
            src={product.image}
            alt={product.alt}
            className="w-60 h-60 border"
          />
        </div>

        {/* title */}
        <div className="my-4 flex gap-x-4 items-end">
          <div className="text-2xl">{product.name}</div>
          <div className="text-sm text-[#333]">{product.brand}</div>
        </div>
        <div className="text-[#222] h-18">{product.description}</div>

        {/* buttons */}
        <div className="flex justify-between items-end gap-x-6 w-full">
          {/* رنگ و خرید */}
          <div className="w-2/3">
            <div className="flex gap-x-1 mb-6">
              <div className="w-8 h-8 bg-red-400"></div>
              <div className="w-8 h-8 bg-amber-400"></div>
            </div>
            <div>
              <AddToCartBtn className={"w-full p-3"} product={product} />
            </div>
          </div>
          {/* قیمت و نظر */}
          <div className="w-1/3 h-22 flex flex-col justify-between ">
            <div className="scale-140 origin-right">
              <Rating value={product.rating} />
            </div>
            {/* قیمت ها */}
            <div className="mt-3">
              {product.discount > 0 && (
                <div className="flex gap-x-2 items-center mb-1">
                  <div className="text-sm text-gray-600 line-through">
                    {product.price}
                  </div>
                  <div className="bg-red-500 text-white px-1.5 rounded-full">
                    {product.discount}%
                  </div>
                </div>
              )}
              <div className="text-xl">{finalPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
