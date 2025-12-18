import React from 'react';

const Title = ({children}) => {
    return (
        <div className=' bg-amber-400 py-10 px-5' >
           <h1 className='text-5xl text-white'>{children}</h1>
            
        </div>
    );
};

export default Title;