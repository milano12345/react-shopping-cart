import React, { useContext } from "react";
import ProductContext from "../contexts/ProductContext";

// Components
import Product from "./Product";

const Products = () => {
  const { Products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {ProductContext.Provider.Products.map(product => (
        <Product key={product.id} product={product} addItem={product.addItem} />
      ))}
    </div>
  );
};

export default Products;
