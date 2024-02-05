"use client";
import { BsStars } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { getAllCategories } from "@/utils/ApiFatching";
import { Button } from "@mui/material";

function CategoryS() {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllCategories();
      const data = response.data.data || [];
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <div className="relative w-full">
      <div className="text-center ">
        <div className="my-12">
          <BsStars className="text-gray-200 text-4xl w-full " />
          <h1 className="text-5xl font-black text-primary  mt-2">Category</h1>
        </div>
        <div className=" grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 lg:px-28 px-0">
          {categories.map((item) => (
            <div key={item.id}>
              <div
                className="h-64 rounded-lg bg-gray-200 flex justify-center items-end"
                style={{
                  backgroundImage: `url(${item.attributes.banner.data[0].attributes.formats.small.url})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Button
                  variant="contained"
                  className=" bg-primary hover:bg-secondary uppercase mb-6"
                >
                  {item.attributes.tite}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryS;
