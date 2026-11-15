'use client';
import React from "react";
import {useRouter} from "next/navigation";

const Orders = () => {

  const router = useRouter();

  return <div className="hover:cursor-pointer" onClick={() => router.push('/shop/products')}>go to products</div>;
};

export default Orders;
