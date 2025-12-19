import React from 'react';

const AuthLayout = ({children}) => {
    return (
      <div className="flex min-h-screen gap-5 ">
        <div className="flex-2">{children}</div>
        <div className="flex-1 bg-amber-500 flex justify-center items-center">
          <h1 className="text-5xl  text-center">Well come to authentication </h1>
        </div>
      </div>
    );
};

export default AuthLayout;