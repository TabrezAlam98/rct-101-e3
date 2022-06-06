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
     {product.map((p)=>(
       <div className="card" key={p.id}>
         <h3>{p.name}</h3>
         <h6>{p.description}</h6>
         <button></button>
         <div className="bttns">
         <button>+</button>
         <button>-</button>
         <button>remove from the cart</button>
         </div>
       </div>
     ))}
   </div>
 
//      <div data-cy={`product-${product.id}`}>
     
// <h3 data-cy="product-name"></h3>
// <h6 data-cy="product-description"></h6>
//       <button data-cy="product-add-item-to-cart-button"></button>
//       <div>
//         <button data-cy="product-increment-cart-item-count-button">+</button>
//         <span data-cy="product-count">
//           {
//             // Count here from CartItems
//             0
//           }
//         </span>
//         <button data-cy="product-decrement-cart-item-count-button">-</button>
//         <button data-cy="product-remove-cart-item-button">remove from the cart</button>
//         </div>
// </div>
  )
};

export default Product;
