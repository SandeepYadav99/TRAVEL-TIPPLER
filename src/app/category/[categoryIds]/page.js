/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-async-client-component */
"use client";
import React from 'react'
import formatCategory from '@/components/hooks/ConvertSmall';
import { useParams } from 'next/navigation';
import CATEGORYs from '@/components/helper/CATEGORYs';
import Category_Post from '@/pages/Category/Category_Post';
import RecentPost from '@/pages/Category/RecentPost';
import CategorysList from '@/pages/Category/CategorysList';
import Social_Links from '@/pages/Category/Social_Links';


const CategoryTypeLists = () => {
 
    const params = useParams();
    const categoryType = params.categoryIds ?? " ";
    const convertedString = formatCategory(categoryType) ;

    return (
        <div className="md:flex md:justify-between mx-[5%] md:mt-2 ">
            <div className=" sm:w-max-[1160px] bg-white h-auto">
                <div className="mt-4">
                    <h1 className="text-2xl font-bold ml-[2%]">{convertedString}</h1>
                </div>
                <hr className="m-6" />
                {CATEGORYs.map((category) => {
                    if (category.category === convertedString) {
                        return <Category_Post fetch_PostLists={category} key={category.id} />
                    }
                    return null
                })}
            </div>
            <div className="sm:w-[35rem] mt-2">
                <Social_Links />
                <RecentPost />
                <CategorysList />
            </div>
        </div>
    )
}

export default CategoryTypeLists;
