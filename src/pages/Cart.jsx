import Header from "../components/layouts/Header";
import "../index.css";
import { TfiFaceSad } from "react-icons/tfi";
import { useCart } from "../contexts/CartContext";
import autoAnimate from "@formkit/auto-animate";
import { useRef } from "react";
import { useEffect } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Product from "../components/products/Product";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, addToCart, reduceFromCart, removeFromCart, clearCart } =
    useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  // const currentPrice = (cart.price * (100 - cart.discount)) / 100;

  const parentRef = useRef(null);
  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [cart.length]);

  return (
    <div>
      <Header />

      <div className="relative top-15">
        <div className="flex justify-between items-center mx-2 rounded-md py-2 px-4 shadow-md text-center bg-[linear-gradient(200deg,#ff1493,white)] ">
          <Link to={"/"}>
            <FaArrowRightLong className="text-2xl text-white" />
          </Link>
          <div className="flex items-center text-(--primary)">
            <div className="text-lg font-bold">سبد خرید</div>
            <MdOutlineShoppingBag className="text-4xl" />
          </div>
        </div>

        {/* countainer */}
        <div className=" p-4 mb-24 overflow-y-auto">
          {cart.map((product) => (
            <div className="flex justify-between border-b border-gray-400 pb-2 mb-4">
              {/* right */}
              <div className="w-3/5 flex flex-col justify-between gap-y-2 pl-4">
                <div>{product.name}</div>

                {/* actions */}
                <div className="flex justify-between items-end gap-x-6 ">
                  <div>
                    <div>
                      {(
                        (product.qty *
                          (product.price * (100 - product.discount))) /
                        100
                      ).toLocaleString()}
                      <span className="text-xs"> تومان</span>
                    </div>
                    <div className="custom-btn-shadow-sm flex items-center self-start rounded-md overflow-hidden mt-1">
                      <div
                        className="px-3 text-xl text-(--primary) "
                        onClick={() => addToCart(product)}
                      >
                        +
                      </div>
                      <div className="px-3 text-lg rounded-sm text-white bg-(--primary)/80 ">
                        {product.qty}
                      </div>
                      <div
                        className="px-3 text-xl text-(--primary) "
                        onClick={() => reduceFromCart(product)}
                      >
                        -
                      </div>
                    </div>
                  </div>

                  {/* prices */}
                  <div className="">
                    <div className="text-sm text-gray-800 mb-1">
                      {product.price}
                    </div>
                    <div>
                      {(
                        (product.price * (100 - product.discount)) /
                        100
                      ).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* left */}
              <div className="w-2/5">
                <img
                  className="w-full h-38 border"
                  src={product.image}
                  alt={product.name}
                />
              </div>
            </div>
          ))}
        </div>

        {/* footer */}
        <div className="fixed bottom-0 right-0 left-0 h-14 flex justify-center items-center backdrop-blur-xs ">
          <button className=" w-4/5 max-w-90 rounded-md py-2  text-xl bg-[linear-gradient(200deg,#ffddff,#ff1493)]">
            انجام خرید
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
