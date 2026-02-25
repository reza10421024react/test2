import React from "react";
import { useCart } from "../../contexts/CartContext";
import { FaCartPlus } from "react-icons/fa";

function AddToCartBtn({ product, className }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => {
        addToCart(product);
        console.log(product);
      }}
      className={`${className} custom-btn-shadow flex justify-center items-center gap-x-2 bg-[linear-gradient(198deg,#be1bff,#7c00ad)] rounded-xs text-white cursor-pointer`}
    >
      <div>افزودن به سبد </div>
      <div>
        <FaCartPlus className="w-5 h-5" />
      </div>
    </button>
  );
}

export default AddToCartBtn;
