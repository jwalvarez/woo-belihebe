import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Product from "./components/Product";
import Resume from "./components/Resume";
import SideBar from "./components/SideBar";
import Products from "./components/Products";
import ReadFile from "./components/ReadFile";

function App() {
  const [products, setProducts] = useState([]);
  const [showLoadFile, setShowLoadFile] = useState(true);

  return (
    // <div className="p-6 h-screen md:w-3/6 w-[90] mx-auto">
    <div className="h-screen flex flex-row">
      <div className="basis-1/4">
        <SideBar />
      </div>
      {products.length != 0 && (
        <Header products={products.length != 0 && products} />
      )}
      <div className="basis-3/4 p-6">
        <div>
          <Routes>
            <Route
              path="/"
              element={
                // showLoadFile, setProducts, setShowLoadFile
                <ReadFile
                  showLoadFile={showLoadFile}
                  setProducts={setProducts}
                  setShowLoadFile={setShowLoadFile}
                />
              }
            ></Route>
            <Route
              path="products"
              element={
                <Products products={products} showLoadFile={showLoadFile} />
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
