import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='grid grid-cols-12 gap-5 min-h-screen '>
            {/* navigation part  */}
            <div className='col-span-3 border-r-8'>
                <h1>Navigation</h1>
                <div className='flex flex-col gap-5 mt-10'>
                    <Link className='py-2 bg-gray-600 rounded-sm pl-5' href={'/dashboard/add-story'}>Add Story </Link>
                    <Link className='py-2 bg-gray-600 rounded-sm pl-5' href={'/dashboard/my-profile'}>My Profile</Link>
                    <Link className='py-2 bg-gray-600 rounded-sm pl-5' href={'/setting'}>Setting</Link>
                </div>
            </div>
            <div className='col-span-9'>{children}</div>
          
            
        </div>
    );
};

export default DashboardLayout;