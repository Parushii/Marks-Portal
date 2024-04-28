import React, { useEffect,useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const navigate = useNavigate();
  let location = useLocation();

  React.useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
  <div className=" mx-auto px-4 flex justify-between">
        <div className="text-white text-3xl flex items-center">
            <div className="mr-4 cursor-pointer" onClick={toggleSidebar}>
        <GiHamburgerMenu />
            </div>
            {showSidebar && 
            (
            <div className="absolute left-0 top-0 h-screen w-80 bg-gray-900">
                <div className="absolute right-2 top-2 cursor-pointer"onClick={toggleSidebar}> <RxCross1/></div>
                <div className="absolute bottom-2  flex items-center justify-center w-80 cursor-pointer">
      <Link
        to="/login"
        className="text-gray-300  px-4 py-2  text-2xl mr-2"
      >
        Logout
      </Link>
   
    </div>
            </div>
        )}
    <Link to="/" className="text-white text-lg font-semibold tracking-wider py-3">
      MarksPortal
    </Link>
        </div>
    
    <div className="hidden lg:block">
      <ul className="flex items-center  mt-4 ml-2">
        <li className="mr-6">
          <Link
            to="/"
            className={`text-gray-300 hover:text-white ${
              location.pathname === "/student" ? "font-bold" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`text-gray-300 hover:text-white ${
              location.pathname === "/about" ? "font-bold" : ""
            }`}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
    <div className="flex items-center lg:ml-4 justify-end">
      <Link
        to="/login"
        className="text-gray-300 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium mr-2"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="text-gray-300 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium"
      >
        Signup
      </Link>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
