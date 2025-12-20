import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const Header = () => {
    return (
      <div>
        <header className="px-8 my-3 border border-b-gray-200 flex flex-wrap justify-between">
          <Link href={"/"}>Dev-story</Link>
          <nav className='space-x-2 flex'>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/register">Register</NavLink>
            <NavLink href="/stories">Stories</NavLink>
            <NavLink href="/tutorials">Tutorials</NavLink>
            
          </nav>
        </header>
      </div>
    );
};

export default Header;