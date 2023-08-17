"use client";
import React from 'react'
import Category_Post from '../Category/Category_Post';
import CATEGORYs from '@/components/helper/CATEGORYs';
import Follow from "@/pages/Category/Social_Links";
import RecentPost from "@/pages/Category/RecentPost";
import CategorysList from "@/pages/Category/CategorysList";
import { useParams } from 'next/navigation';
import formatCategory from '@/components/hooks/ConvertSmall';

const CategoryDetail = ({ postData }) => {
    console.log(postData)
    const params = useParams();
    //     const paramsList = formatCategory(params.categoryIds);
    // console.log(params.categoryIds);
    // is: - id, content->rendered, heading
    return (
        <div className="md:flex md:justify-between mx-[5%] md:mt-2 ">
            <div className=" sm:w-max-[1160px] bg-white h-auto">
                <div className="mt-4">
                    <h1 className="text-2xl font-bold ml-[2%]">{params.categoryIds}</h1>
                </div>
                <hr className="m-6" />
                {CATEGORYs.map((category, index) => {
                    if (category.category === params.categoryIds) {
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
                {/* {postData.map((category)=>{
                    const urlParts = category.link.split("/");
                        // console.log(urlParts)
                        if(urlParts.includes(params.categoryIds)){
                            return (
                                <Category_Post
                                id={category.id}
                                key={category.id}
                                description={category.content.rendered}
                                date={category.date}
                                image={category.image}
                                category={category.category}
                                aurther={category.aurther}
                                heading={category.title} />
                            );
                        }
                  return null;
                })} */}
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