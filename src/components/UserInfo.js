import React, { useState, useEffect } from "react";
import axios from "axios";

/*
export default function UserInfo() {

      const[data,setData]=useState([]);

      useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>setData(response.data))
        .catch((error)=>console.log("error in fetching data"+error))
      },[])

  return (
    <div>
      <h1>User Details</h1>
      <ul>
        {
            data.map((d)=>(
                    <div>
                    <li>{d.id}{d.title}</li>
                    <p>{d.body}</p>
                    </div>

            ))
        }
      </ul>
    </div>
  )
}
*/

export default function UserInfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch((error) => console.log("error in fetching data" + error));
  }, []);

  return (
    <div>
      <h1>User Details</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">Title</th>
            <th scope="col">body</th>
          
          </tr>
        </thead>

        {data.map((d) => (
          <tbody>
            <tr>
              <th scope="row">{d.id}</th>
              <td>{d.title}</td>
              <td>{d.body}</td>
              
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
