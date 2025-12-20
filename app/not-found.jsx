import Link from 'next/link';
import React from 'react';

const NotFound404 = () => {
    return (
      <div className="min-h-screen text-center flex items-center justify-center ">
        <div className=''>
          <p className="text-red-500">Your page not found </p>
          <Link className="underline " href={"/"}>
            {" "}
            go to home
          </Link>
        </div>
      </div>
    );
};

export default NotFound404;