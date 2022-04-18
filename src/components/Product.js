import React from "react";

const Product = ({ product, index }) => {
  return (
    <div className="flex items-stretch my-2 py-3 bg-gray-50 hover:bg-gray-100 border rounded cursor-pointer shadow-sm hover:scale-[0.985] duration-300">
      <span className="text-indigo-500 py-2 px-2 w-10 rounded-l flex justify-center text-sm font-bold">
        {index - 2}
      </span>
      <span className="text-sm text-zinc-900 mx-4 my-auto sm:w-1/4 w-1/2">
        {product[5]}
      </span>
      <span className="bg-indigo-200 px-5 sm:block hidden rounded-full text-sm text-zinc-900 my-auto">
        {product[14]}
      </span>

      <span className="text-sm font-semibold text-zinc-900 mx-4 my-auto inline">
        $ {product[8]}
      </span>
    </div>
  );
};

export default Product;
