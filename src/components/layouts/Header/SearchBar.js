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
    const router = useRouter();

    const submitHandler = (values) => {
        if (values.inputValue) {
            router.push(`/search_results/${values.inputValue}`);
        }
    }

    return (
        <Formik initialValues={searchValue} onSubmit={submitHandler}>
            {(formik) => {
                const { values, handleSubmit, setValues } = formik;
                return (
                    <Form className="lg:flex items-center justify-center hidden " onSubmit={handleSubmit}>
                        <Field
                            className="p-[0.600rem] sm:w-[83%] rounded-l-md border-2 focus:border-blue-500 focus:outline-0"
                            type="search"
                            placeholder="Search "
                            aria-label="Search"
                            name='search'
                            required
                            value={values.inputValue}
                            onChange={(e) => {
                                dispatch(headerActions.updateSearchQuery(e.target.value));
                                setValues({ ...values, inputValue: e.target.value });
                            }}
                        />
                        <button className=" bg-blue-400 p-[0.700rem] rounded-r-md" type="submit" onClick={submitHandler}>
                            <Image src={ImgSearch} alt="travil" height={24} className="" />
                        </button>

                    </Form>
                )
            }}
        </Formik>


    )
}

export default SearchBar