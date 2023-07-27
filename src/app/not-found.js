import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="mx-auto bg-white text-2xl font bold border-2 rounded-md w-[45rem] h-[20rem] mt-5">
      <div className="mt-[10%] ">
        <h1 className="text-center">Not found – 404!</h1>
        <div className="bg-blue-500 rounded-md w-16 items-center mx-auto text-white">
          <Link href="/">Go back </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
