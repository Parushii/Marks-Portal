import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import stud from "../assets/stud.png";
import stud2 from "../assets/stud2.png";
import Card from "./Card";
import Sidebar from "./Sidebar";

const semesters = {
  "Semester1": ["Subject1", "Subject2", "Subject3"],
  "Semester2": ["Subject4", "Subject5", "Subject6"],
  "Semester3": ["Subject7", "Subject8", "Subject9"],
  "Semester4": ["Subject10", "Subject11", "Subject12"],
  "Semester5": ["Subject13", "Subject14", "Subject15"],
  "Semester6": ["Subject16", "Subject17", "Subject18"],
  "Semester7": ["Subject19", "Subject20", "Subject21"],
  "Semester8": ["Subject22", "Subject23", "Subject24"]
};
const termTests = ["TermTest 1", "TermTest 2","ESE","Practicals"]; // Define term tests
const subjects = ["Maths", "Physics", "Chemistry", "Biology", "English"];

const Student = () => {
    const [semester,setSemester]=useState(null)
    const [subject,setSubject]=useState(null)
    const [tt,setTt]=useState(null)

    const navigate = useNavigate();
    const handleClickSub=(sub)=>{
      setSubject(sub)
        console.log(sub)
    }
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
      <Sidebar/>

      <div className="bg-green-200 absolute left-[16%] my-4 ml-8 w-[80.5%] h-[25vh] rounded-md">
        <div className="text-green-950  px-4 py-2 text-3xl lg:text-5xl font-bold flex items-center justify-center  w-[70%] h-full">
          Welcome to the Portal!
        </div>
        <div className="absolute right-0 top-2 w-[30%]">
  <img src={stud2} className="h-auto" alt="Student" style={{ maxHeight: "230px" }}/>
</div>

      </div>

      <div className="absolute top-72 left-[18%]">
        <div className="text-green-600  px-4 py-2  text-2xl font-bold flex  ml-4 md:ml-24 xl:ml-[8%]">
        Choose {!semester ? "semester" : (semester && !subject ? "subject" : "term test")}
        </div>
        <div className="flex flex-wrap gap-16 justify-center items-center">
        {!semester && Object.keys(semesters).map((sem) => (
          <Card key={sem} text={sem} onClick={() => handleClickSem(sem)} link={"subject"} />
        ))}

      </div>
        <div className="flex flex-wrap gap-16 justify-center items-center">
        {semester && !subject && semesters[semester].map((subject, index) => (
        <Card key={index} text={subject} onClick={() => handleClickSub(subject)} link={"subject"}/>
      ))}
      </div>

        <div className="flex flex-wrap gap-16 justify-center items-center">
            {subject && termTests.map((tt)=>
                (   
                    <Card key={tt} text={tt} onClick={()=>handleClickTt(tt)} link={"subject"}/>
                )
            )}
        </div>
      </div>
      </div>
    </>
  );
};

export default Student;
