import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import stud from "../assets/stud.png";
import stud2 from "../assets/stud2.png";
import Card from "./Card";

const semesters=["Semister 1","Semister 2","Semister 3","Semister 4","Semister 5","Semister 6","Semister 7","Semister 8"]
const termTests = ["TermTest 1", "TermTest 2"]; // Define term tests
const subjects = ["Maths", "Physics", "Chemistry", "Biology", "English"];

const Student = () => {
    const [semester,setSemester]=useState(null)
    const [tt,setTt]=useState(null)
    const navigate = useNavigate();
    const handleClickSem=(sem)=>{
        setSemester(sem)
        console.log(semester)
    }
    const handleClickTt=(t)=>{
        setTt(t)
        console.log(tt)
    }
    
  return (
    <>
      {/* <Navbar/> */}
      <div className="flex">
      <div>
        <div className="absolute left-0 top-0 h-[96%] w-[16%] bg-green-100 m-4 rounded-md">
          <h1 className="text-center text-3xl mt-4 font-bold text-green-900">
            Marks Portal
          </h1>
          <div className="flex justify-center mt-2 h-32">
            <img src={stud} />
          </div>
          {/* <div className="absolute right-2 top-2 cursor-pointer"onClick={toggleSidebar}> <RxCross1/></div> */}
          <div className="flex items-center justify-center mt-4">
            <ul className="mt-2 ml-2">
              <li className="my-4 text-center">
                <Link
                  to="/"
                  className={`text-green-900 text-2xl hover:bg-green-300 hover:px-4 hover:py-2 hover:rounded-md w-56 inline-block ${
                    location.pathname === "/student"
                      ? "bg-green-300 px-4 py-2 rounded-md"
                      : ""
                  }`}
                >
                  Dashboard
                </Link>
              </li>
              <li className="my-4 text-center">
                <Link
                  to="/about"
                  className={`text-green-900 text-2xl hover:bg-green-300 hover:px-4 hover:py-2 hover:rounded-md w-56 inline-block ${
                    location.pathname === "/about"
                      ? "bg-green-300 px-4 py-2 rounded-md"
                      : ""
                  }`}
                >
                  About
                </Link>
              </li>
            </ul>
          <div className="absolute bottom-2  flex items-center justify-center w-56 cursor-pointer">
            <Link
              to="/login"
              className="text-green-950  px-4 py-2  text-2xl mr-2"
            >
              Logout
            </Link>
          </div>
          </div>
        </div>
      </div>

      <div className="bg-green-200 absolute left-[16%] my-4 ml-8 w-[80.5%] h-[25vh] rounded-md">
        <div className="text-green-950  px-4 py-2 text-3xl lg:text-5xl font-bold flex items-center justify-center  w-[70%] h-full">
          Welcome to the Portal!
        </div>
        <div className="absolute right-0 top-2 w-[30%]">
  <img src={stud2} className="h-auto" alt="Student" style={{ maxHeight: "230px" }}/>
</div>

      </div>

      <div className="absolute top-72 left-[18%]">
        <div className="text-green-600  px-4 py-2  text-2xl font-bold flex ml-[10%]">
          Choose {!semester ? "semester":"term test"}
        </div>
        <div className="flex flex-wrap gap-16 justify-center items-center">
            {!semester && semesters.map((sem)=>
                (   
                    <Card key={sem} text={sem} onClick={()=>handleClickSem(sem)} link={"subject"}/>
                )
            )}
        </div>
        <div className="flex flex-wrap gap-16 justify-center items-center">
            {semester && termTests.map((tt)=>
                (   
                    <Card key={tt} text={tt} onClick={()=>handleClickTt(tt)} link={"subject"}/>
                )
            )}
        </div>
        {
        console.log(semester)}
        {console.log(tt)
        }
      </div>
      </div>
    </>
  );
};

export default Student;
