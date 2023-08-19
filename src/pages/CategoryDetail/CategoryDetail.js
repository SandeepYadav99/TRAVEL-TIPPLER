"use client";
import React from 'react'
import Category_Post from '../Category/Category_Post';
import Follow from "@/pages/Category/Social_Links";
import RecentPost from "@/pages/Category/RecentPost";
import CategorysList from "@/pages/Category/CategorysList";
import { useParams } from 'next/navigation';
import CATEGORYs from '@/components/helper/CATEGORYs';


const CategoryDetail = () => {
    const params = useParams();

    return (
        <div className="md:flex md:justify-between mx-[5%] md:mt-2 ">
            <div className=" sm:w-max-[1160px] bg-white h-auto">
                <div className="mt-4">
                    <h1 className="text-2xl font-bold ml-[2%]">{params.categoryIds}</h1>
                </div>
                <hr className="m-6" />
             {CATEGORYs.map((category, index) => {
                    if (category.category.toLowerCase().split(" ").join("-") === params.categoryIds) {
                        return (
                            <Category_Post
                                key={category.id}
                                description={category.detail.description}
                                date={category.date}
                                image={category.image}
                                category={category.category}
                                aurther={category.aurther}
                                heading={category.heading} />
                        );
                    }
                    return null;
                })} 
                  {/* //  const urlParts = category.link.split("/"); */}
            </div>
            <div className="sm:w-[35rem] mt-2">
                <Follow />
                <RecentPost />
                <CategorysList />
            </div>
        </div>
    )
}

export default CategoryDetail