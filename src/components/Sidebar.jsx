import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import stud from "../assets/stud.png";
import stud2 from "../assets/stud2.png";

const Sidebar = () => {
    const [sapid, setSapid] = useState(60004220000);
  return (
    <div>
          <div className="absolute left-0 top-0 h-[96%] w-[16%] bg-green-100 m-4 rounded-md">
            <h1 className="text-center text-3xl mt-4 font-bold text-green-900">
              Marks Portal
            </h1>
            <div className="flex justify-center mt-2 h-32">
              <img src={stud} />
            </div>
            <div className="flex justify-center mt-2">
             <div className="text-xl font-medium text-green-800"><span className="text-green-950">Sapid:</span> {sapid}</div>
            </div>
            {/* <div className="absolute right-2 top-2 cursor-pointer"onClick={toggleSidebar}> <RxCross1/></div> */}
            <div className="flex items-center justify-center mt-4">
              <ul className="mt-2 ml-2">
                <li className="my-4 text-center">
                  <Link
                    to="/student"
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
                    to="/profile"
                    className={`text-green-900 text-2xl hover:bg-green-300 hover:px-4 hover:py-2 hover:rounded-md w-56 inline-block ${
                      location.pathname === "/profile"
                        ? "bg-green-300 px-4 py-2 rounded-md"
                        : ""
                    }`}
                  >
                    Profile
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
  )
}

export default Sidebar