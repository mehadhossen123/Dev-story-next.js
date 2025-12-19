import React from 'react';

const TutorialsPage = async({params}) => {
    const result=await params;
    console.log(result)
    return (
        <div>
            <h1>This is tutorialPage </h1>
            
        </div>
    );
};

export default TutorialsPage;