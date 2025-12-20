
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
    const pathName=usePathname()
    console.log(pathName)
    return (
        <div>
            <Link className={`${pathName.startsWith(href) && 'bg-red-500 py-2 px-4 rounded-sm'}`} href={href}>{children}</Link>
            
        </div>
    );
};

export default NavLink;