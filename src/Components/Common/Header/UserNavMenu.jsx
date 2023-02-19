import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import ProfileDropdown from "../Utilities/ProfileDropdown";

const UserNavMenu = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <ul className="flex items-center space-x-1">
      <li className="hover:bg-green-50 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:bg-green-50 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        <Link to="/order-summary">Order</Link>
      </li>
      <li className="hover:bg-green-50 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        Coupon
      </li>
      <li className="hover:bg-green-50 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        <Link to="/payment-history">Payment</Link>
      </li>
      <li className="hover:text-green-500 border-b-2 border-transparent hover:font-extrabold px-2.5 py-1.5"><ProfileDropdown/></li>
      {/* <button
        onClick={() => setClicked(!clicked)}
        className="hover:border-b-2 border-transparent text-slate-400 px-2.5 py-1.5 flex items-center"
      >
        <span>My Profile</span>
        <span className="text-xl">
          {clicked ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
        </span>
      </button> */}
    </ul>
  );
};

export default UserNavMenu;
