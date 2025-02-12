import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import cart from "../../assets/cart_icon.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  console.log(location);
  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const handleMenu = () => {
    setOpen(!open);
  };

  const handleNavLinkClick = () => {
    setOpen(false);
  };

  const navlinks = [
    { path: "/", link: "Home" },
    { path: "/men", link: "Men" },
    { path: "/women", link: "Women" },
    { path: "/kids", link: "Kids" },
    { path: "/cart", link: "Cart" },
  ];

  return (
    <>
      <div className="relative shadow-md  px-4 py-1 flex justify-between items-center h-[70px] w-full border ">
        {/* Logo Section */}
        <div className="flex flex-col text-left -space-y-1">
          <div className="flex items-center">
            <img src={logo} className="w-[30px] md:w-[40px]" alt="Logo" />
            <span className="text-xl md:text-3xl">Shopper</span>
          </div>
          <p className=" tracking-[4px] md:tracking-[6px] mx-2">Quick style</p>
        </div>

        {/* Pages */}
        <div className="relative hidden sm:flex gap-8 justify-between items-center">
          <ul className="flex sm:flex-row space-y-4 sm:space-y-0 sm:space-x-1 sm:gap-1 md:gap-4 text-lg">
            {navlinks.map(({ path, link }) => (
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-black hover:text-red border-b-2 border-red-500"
                    : "text-black hover:text-red"
                }
              >
                {link} <hr />
              </NavLink>
            ))}
          </ul>

          {/* Login and Search */}
          <div className="flex flex-col sm:flex-row  justify-end  gap-2 lg:gap-4 mt-4 sm:mt-0">
            <NavLink to="/signup">
              <button onClick={handleNavLinkClick}>Signup</button>
              </NavLink>
              <NavLink to="/login">
                <button onClick={handleNavLinkClick}>Login</button>
              </NavLink>
              <NavLink to="/">
              <input
                type="text"
                placeholder="Search"
                className="md: px-2 sm:px-4 py-1 w-[100px] rounded-3xl border"
              />
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="relative sm:hidden">
          <button onClick={handleMenu}>{open ? "CLOSE" : "MENU"}</button>
          {open && (
            <ul className="absolute -left-24 top-36 flex flex-col space-y-4 text-lg bg-white p-4 border border-black">
              {navlinks.map(({ path, link }) => (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black hover:text-red border-b-2 border-red-500"
                      : "text-black hover:text-red"
                  }
                >
                  {link}
                </NavLink>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
