import React from "react";
import { useLocation } from "react-router";

const Success = () => {
  const location = useLocation();
  return <div>payment was SuccessFull</div>;
};

export default Success;
