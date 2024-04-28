import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = (props) => {

  const [cardColor, setCardColor] = useState("");

  useEffect(() => {
    const colors = ['#ccfc90', '#fad180', '#fefc8d', '#a7ffeb','#f68b80','#e0cbfd'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    setCardColor(colors[randomIndex]);
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  return (
    <>
        <div className="w-32 md:w-64 ml-2" onClick={props.onClick}>
      {/* <Link to={`/${props.link}`}> */}
          <div className="card my-3 rounded-md shadow-lg hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl" style={{ background: cardColor, height: "22vh", border: "none" }}>
            <div className="flex justify-center items-center p-4 h-full cursor-pointer">
              <h5 className="font-semibold text-center text-3xl">{props.text}</h5>
            </div>
          </div>
      {/* </Link> */}
        </div>
    </>
  );
  
};

export default Card;
