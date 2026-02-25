import "../../index.css";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import AddToCartBtn from "./AddToCartBtn";

function Product({ product }) {
  const currentPrice = (product.price * (100 - product.discount)) / 100;

  return (
    <div className=" w-46 h-80 flex-none bg-white">
      <Link to={`product/${product.id}`} className="w-full h-40 block">
        <img className="w-full h-full" src={product.image} alt={product.alt} />
      </Link>

      {/* title */}
      <div className="relative h-40 flex flex-col items-center whitespace-normal text-center p-2">
        <h3 className="">{product.name}</h3>
        <p className="w-full text-sm text-[#444] truncate ">
          {product.description}
        </p>
        <div className="flex justify-between items-center w-full mt-3">
          <div className="">
            {product.discount > 0 && (
              <div className="flex items-center gap-x-1">
                <div className="text-xs text-gray-400 line-through">
                  {product.price}
                  {""}
                </div>
                <div className="  text-sm px-1 rounded-full bg-green-500 text-white">
                  {product.discount}%
                </div>
              </div>
            )}
            <div className="justify-self-start text-lg ">
              {currentPrice.toLocaleString()}
            </div>
          </div>
          <div className="">
            <Rating value={product.rating} />
          </div>
        </div>
        <AddToCartBtn product={product} className={" w-43 h-10 absolute bottom-1.5  "} />
      </div>
    </div>
  );
}

export default Product;
