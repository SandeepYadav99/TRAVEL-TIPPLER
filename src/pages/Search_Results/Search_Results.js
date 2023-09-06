"use client";
import CATEGORYs from "@/components/helper/CATEGORYs";
import React from "react";
import SocialLinks from "../Category/Social_Links";
import RecentPost from "../Category/RecentPost";
import CategorysList from "../Category/CategorysList";
import Category_Post from "../Category/Category_Post";
import { useParams } from "next/navigation";


const Search_Result = () => {
    const query = useParams();

    const Search_Results = CATEGORYs?.filter((category) => {
        return category.heading.includes(query?.searchId) || category.detail.description.includes(query?.searchId)
    })

    return (
        <div className="mx-[4%] sm:flex shadow-md ">
            <div>
                <div className=" sm:w-max-[1160px] bg-white h-auto">
                    <div className="p-[20px]">
                        <h2 className="text-2xl font-semibold">Search results for: {query?.searchId}</h2>
                        <hr className="m-[2px]" />
                    </div>
                    {Search_Results?.length <= 0 && <p className="mx-[2%]  pb-2 text-md">Sorry, but nothing matched your search terms. Please try again with different keywords.</p>}
                    {Search_Results?.map((category, index) => {
                        return <>
                            <Category_Post fetch_PostLists={category} key={category.id}/>;
                        </>
                    })}
                </div>
            </div>

            <div className="sm:w-[35rem]">
                <SocialLinks />
                <RecentPost />
                <CategorysList />
            </div>
        </div>
    );
};

export default Search_Result;
