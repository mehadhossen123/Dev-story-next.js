import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
      <div>
        <header className="px-8 my-3 border border-b-gray-200 flex flex-wrap justify-between">
          <Link href={"/"}>Dev-story</Link>
          <nav className='space-x-2'>
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/tutorials">Tutorials</Link>
            
          </nav>
        </header>
      </div>
    );
};

export default Header;