import React from "react";
import { useSearchParams, useParams } from "react-router-dom";
const ProductID = () => {
  const currentId = useParams();

  console.log(currentId);
  return <div>ProductID - {currentId.id}</div>;
};

export default ProductID;
