import React from "react";
import Resume from "./Resume";
import Product from "./Product";

const Products = ({ products, showLoadFile }) => {
  return (
    <div className="pb-10 sticky">
      {!showLoadFile && (
        <Resume
          quantity={products.length}
          brand={!showLoadFile && products[2][4]}
        />
      )}
      {/* fixed stiky mt-0 rounded-md cursor-default z-10 */}
      <h2 className="bg-gray-100 z-20 py-6 my-auto sticky top-24 text-4xl font-bold text-gray-700">
        Productos
      </h2>

      {products.map(
        (product, index) =>
          index > 2 && <Product key={index} product={product} index={index} />
      )}
    </div>
  );
};

export default Products;
