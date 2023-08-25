// import React from "react";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/product-listing");
  };
  return (
    <div>
      {/* <h1>HomePage</h1> */}
      <button onClick={handleClick}>get started</button>
    </div>
  );
};

export default HomePage;
