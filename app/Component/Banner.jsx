"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router=useRouter()

    const handleBtn=()=>{
       const password=prompt("Enter your password --- ")
       if(password==='1234'){
      router.push("/dashboard")

       }
    }
    return (
        <div className='text-center bg-sky-200 space-y-3 text-black py-20 rounded-2xl'>
            <h1 className='text-4xl font-bold '>Well come to dev story </h1>
            <button onClick={handleBtn} className='text-white bg-sky-400 cursor-pointer hover:bg-black px-5 py-3  '> Shared-story </button>
            
        </div>
    );
};

export default Banner;