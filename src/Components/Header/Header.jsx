import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [tasktype, settasktype] = useState("");
  const InitalDate = new Date();
  let CurrentDate = {
    date: InitalDate.getDate(),
    month: InitalDate.getMonth() + 1,
    year: InitalDate.getFullYear(),
  };

  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/important":
        settasktype("Important");
        break;
      case "/missing":
        settasktype("Missing");
        break;
      case "/today":
      default:
        settasktype("Today");
        break;
    }
  }, [location.pathname]);
  return (
    <>
      <div className="flex justify-between">
        <div className="text-2xl  mb-4 text-white font-light">{tasktype}</div>
        <div className="text-white ">{`${CurrentDate.date}-${CurrentDate.month}-${CurrentDate.year}`}</div>
      </div>
    </>
  );
};

export default Header;
