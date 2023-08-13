"use client";
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ImgSearch from "@/assets/search.svg";
import { headerActions } from '@/store/slices/headerSlice';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';



const SearchBar = () => {
    const searchValue = useSelector((state) => state.header.searchQuery);
    const dispatch = useDispatch();
    const navigate = useRouter();
  
    const submitHandler = (value) => {
        navigate.push(`/search_results?q=${value.inputValue}`)
    }

    return (
        <Formik initialValues={searchValue} onSubmit={submitHandler}>
            {(formik) => {
                const { values, handleSubmit, setValues } = formik;
                return (
                    <Form className="lg:flex items-center justify-center hidden" onSubmit={handleSubmit}>
                        <Field
                            className=" p-2.5 rounded-md border focus:border-blue-500 "
                            type="search"
                            placeholder="Search "
                            aria-label="Search"
                            name='search'
                            value={values.inputValue}
                            onChange={(e) => {
                                dispatch(headerActions.updateSearchQuery(e.target.value));
                                setValues({ ...values, inputValue: e.target.value });
                            }}
                        />
                        <button className=" bg-blue-400 p-[0.700rem] -ml-1 rounded-r-md" type="submit" onClick={submitHandler}>
                            <Image src={ImgSearch} alt="travil" height={24} className="" />
                        </button>

                    </Form>
                )
            }}
        </Formik>


    )
}

export default SearchBar