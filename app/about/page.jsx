import React from 'react';
import Title from '../Component/Title';
import Link from 'next/link';

const about = () => {
    return (
      <div>
        <Title> Welcome to my about page </Title>
        <Link href="/about/contact">contact</Link>
        <Link href="/about/teams">Teams</Link>
      </div>
    );
};

export default about;