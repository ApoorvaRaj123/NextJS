'use client'
import React from "react";
import { useParams } from "next/navigation";

const ShopTagItem = () => {
  const params = useParams();

  console.log(params);
  
  return <div>ShopTagItem</div>;
};

export default ShopTagItem;
