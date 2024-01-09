import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Home() {
  const [dbData, setDbData] = useState([]);
  async function getFetch() {
    const response = await fetch("http://localhost:3000/");
    const Data = await response.json();
    setDbData(Data);
  }
  function deleteProduct(id) {
    fetch("http://localhost:3000/" + id, { method: "DELETE" }).then(() =>
      getFetch()
    );
  }
  useEffect(() => { 
    getFetch();
  }, []);

  return (
    <div>
      {dbData.map((x) => (
        <ul key={x._id}>
          <li>{x.title} </li>
          <li>{x.price} azn</li>
          <button onClick={() => deleteProduct(x._id)}>x</button>
          <Link to={"/detail/"+x._id}><button> view more</button></Link>
        </ul>
      ))}
    </div>
  );
}

export default Home;
