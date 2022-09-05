import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { deauthenticate, reauthenticate } from "../../redux/actions/authActions";

// Layout Components
import Background from "./background";
import TopNavBar from "./topnavbar";
import Sidebar from "./sidebar";


const Layout = ({ children, isAuthenticated }) => {
  const dispatch = useDispatch();
  const [showSideBar, setShowSideBar] = useState(false);
  const handleClick = () => {
    debugger
    setShowSideBar(!showSideBar);
  }
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(reauthenticate(isAuthenticated));
    }
  }, []);
  return (
    <>
      <div>
        {/* <div>
          <ul>
            {isAuthenticated && (
              <li>
                <Link href="/">
                <a>Home</a>
              </Link>
              </li>
            )}
            {!isAuthenticated && (
              <li>
                <Link href="/signin">
                  <a>Sign In</a>
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li onClick={() => dispatch(deauthenticate())}>
                <a>Sign Out</a>
              </li>
            )}
            <li>
              <Link href="/whoami">
                <a>Who Am I</a>
              </Link>
            </li>
          </ul>
        </div> */}
        <Background>
              <TopNavBar showSideBar={ handleClick }></TopNavBar>
              <Sidebar display={showSideBar}></Sidebar>
              <div className="pages">{children}</div>
        </Background>
        {/* {isAuthenticated && (
             )} */}
        {/* <div className="has-text-centered" style={{ position: absolute}}>{children}</div> */}
      </div>
    </>
  );
};

export default Layout;
