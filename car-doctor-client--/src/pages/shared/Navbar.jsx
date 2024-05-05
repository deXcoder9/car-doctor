import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.config";

const Navbar = () => {
  const {user} = useContext(AuthContext)
    const navBar = 
    <>
        <li> <NavLink>Home</NavLink> </li>
        <li> <NavLink to='/about'>About</NavLink> </li>
        <li> <NavLink to='/services'>Services</NavLink> </li>
        <li> <NavLink to='/blog'>Blog</NavLink> </li>
        <li> <NavLink to='/contact'>Contact</NavLink> </li>
    </>

    const handleLogOut = () =>{
      signOut(auth)
      .then(()=> {
        alert("Log Out successfully")
        console.log(user)
      })
      .catch(error=> console.log(error))
    }
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navBar}
            </ul>
          </div>
          <Link to="/"> <img className="h-16" src={logo}  /> </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navBar}
          </ul>
        </div>
        <div className="navbar-end">
        {
          user?.email ? 
          <div className="space-x-5">
            <Link to='/bookings' className="btn btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811]" >My Bookings</Link>
            <button onClick={handleLogOut} className="btn btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811]" >Log Out</button>
          </div>
          :
          <Link to='/login' className="btn btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811]">Appointment</Link>
        }
        </div>
      </div>
    );
};

export default Navbar;