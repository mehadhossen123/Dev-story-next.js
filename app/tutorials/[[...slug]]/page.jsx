import Title from "@/app/Component/Title";
import React from "react";

const TutorialsPage = async ({ params }) => {
    const{slug}=await params;
  const [technology, topic, ,  page_no, subject] = await slug || []




  return (
    <div>
      <Title>{technology} tutorials</Title>
      <h2>{topic}</h2> <hr />
      <div className="flex justify-between ">
        <h2>{subject}</h2>
        <p>Page no: {page_no}</p>
      </div>
      <h1>this is tutorials page</h1>
    </div>
  );
};

export default TutorialsPage;
