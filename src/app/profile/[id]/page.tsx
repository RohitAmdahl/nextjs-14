import React from "react";

const Userprofile = ({ params }: any) => {
  return (
    <div className="text-2xl flex justify-center items-center p-5 m-5 ">
      Userprofile page
      <span className="text-4xl  px-2 my-2 font-extrabold bg-orange-400 ">
        {params.id}{" "}
      </span>
    </div>
  );
};

export default Userprofile;
