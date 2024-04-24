import { Link, NavLink } from "react-router-dom";
import { Tooltip, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const {user, LogOut} = useContext(AuthContext); 
  var imgUrl = 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' ; 
  if(user){
    imgUrl = user.photoURL;
  }
  
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/career"}>Career</NavLink>
      </li>
     
    </>
  );
  return (
    <div className="my-2">
      <div className="navbar bg-base-100">

        <div className="navbar-start">
        {
          user &&   <p className="font-bold">{user.displayName}</p>
        }
        
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          
       
       
       

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={imgUrl} 
              />
            </div>
          </div>
          <div className={`${user && 'hidden'}`}>
          <Link
            to={"/login"}
            className="px-6 ms-4 btn-outline font-semibold py-2 bg-white"
          >
            Log In
          </Link>
          <Link
            to={"/register"}
            className="px-6 ms-4 btn-outline font-semibold py-2 bg-white"
          >
            Register
          </Link>
          </div>
          <div className={`${user || 'hidden'}`}>
          <button onClick={()=>LogOut()}
        
            className="px-6 ms-4 btn-outline font-semibold py-2 bg-white"
          >
            Log Out
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
