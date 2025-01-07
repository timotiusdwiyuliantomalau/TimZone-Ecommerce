"use client";
import { getAllCategories } from "@/lib/actions/product.actions";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories().then((res: any) => setCategories(res));
  }, []);
  return (
    <>
      {categories.length > 0 &&
        categories.map((category: any, i: number) => (
          <div key={i} className="text-blue-500 ">
            {category}
          </div>
        ))}
    </>
  );
}
