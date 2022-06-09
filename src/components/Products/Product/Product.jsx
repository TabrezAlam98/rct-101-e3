import React,{useState} from "react";
import { useEffect } from "react";
import Products from "../Products";

const Product = () => {
  // Note: this id should come from api

  const [product, setProduct] = useState([]);
 
  useEffect (()=>{
    const fetchProduct = async  ()=>{
      let r= await fetch("http://localhost:8080/products");
      let d= await r.json();
      
      console.log(d)
      setProduct(d)
    }
    fetchProduct();
  },[])
  

  // const product = { id: 1 };
  return (
    <div className="main">
  
 {product.map((el)=>(

 
     <div className="card" data-cy={`product-${product.id}`}>
     
<h3 data-cy="product-name">{el.name}</h3>
<h6 data-cy="product-description">{el.description}</h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
            0
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">remove from the cart</button>
        </div>
</div>
))}
</div>
  )
};

export default Product;
