'use client'
import React from "react";
import { useParams } from "next/navigation";

const ShopTagItem = () => {
  const params = useParams();

  return <div>ShopTagItem {params.tag} with {params.item}</div>;
};

export default ShopTagItem;
