import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import stud from "../assets/stud.png";
import stud2 from "../assets/stud2.png";
import Sidebar from "./Sidebar";

const Profile = () => {
  
  const navigate = useNavigate();

  return (
    <>
      {/* <Navbar/> */}
      <div className="flex">
        <Sidebar/>

        <div className="bg-green-200 absolute left-[16%] my-4 ml-8 w-[80.5%] h-[25vh] rounded-md">
          <div className="text-green-950  px-4 py-2 text-3xl lg:text-5xl font-bold flex items-center justify-center  w-[70%] h-full">
            Welcome to the Portal!
          </div>
          <div className="absolute right-0 top-2 w-[30%]">
            <img
              src={stud2}
              className="h-auto"
              alt="Student"
              style={{ maxHeight: "230px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
