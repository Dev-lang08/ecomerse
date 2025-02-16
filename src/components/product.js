import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Product() {

    const[products,setProducts]=useState([]);

    useEffect(() => {
     
        axios.get("http://localhost:8080/api/products/getAll")
        .then((response)=>setProducts(response.data))
        .catch((error)=>console.log("error in fetching"+error))
    }, []);

  return (
    <div>
        <h1>Product Details</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Product Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          
          </tr>
        </thead>

        {products.map((d) => (
          <tbody>
            <tr>
              <th scope="row">{d.id}</th>
              <td>{d.name}</td>
              <td>{d.description}</td>
              <td>{d.price}</td>
              
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}
