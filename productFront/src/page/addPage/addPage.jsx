import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddPage() {
  const navigate = useNavigate();
  const [titleData, setTitleData] = useState("");
  const [priceData, setPriceData] = useState("");
  
  
  function submitForm() {
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: titleData, price: priceData }),
    });
    navigate("/");
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          onChange={(e) => setTitleData(e.target.value)}
          name="title"
          placeholder="mehsul adi"
        />
        <input
          type="text"
          name="price"
          placeholder="qiymet"
          onChange={(e) => setPriceData(e.target.value)}
        />
        <button>add</button>
      </form>
    </div>
  );
}

export default AddPage;
