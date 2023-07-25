"use client";
import CATEGORYs from "@/components/helper/CATEGORYs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <div>
      {CATEGORYs.map((cagte, index) => {
        return (
          <div key={cagte.id}>
            <div>
              <Image src={cagte.image} alt="Travel" width={300} height={300} />
              <Link href={""}>{cagte.category}</Link>
            </div>
            <div>
              <h1>{cagte.heading}</h1>
              <div>
                <p>{cagte.aurther}</p>
                <p>{cagte.date}</p>
              </div>
              <p>{cagte.detail}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
