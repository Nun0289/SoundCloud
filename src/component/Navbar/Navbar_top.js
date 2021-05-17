import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./Navbar_topElement";
import logo from "../../assets/NoCopyRightCloud-removebg-preview.png";
// import * as fi from "react-icons/fi";
import * as md from "react-icons/md";
import Authentication from "../../page/Authentication";
import { Button, IconButton, ButtonGroup, ButtonToolbar } from "rsuite";
import LoginPopup from "../../component/LoginPopup";
import { NavDropdown } from "react-bootstrap";

const TopNavbar = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [login, setlogin] = useState(true);
  return (
    <>
      <Authentication trigger={showPopUp} setTrigger={setShowPopUp}>
        <LoginPopup />
      </Authentication>
      <Nav>
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "100px",
              marginLeft: "-15px",
            }}
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <input
            type="text"
            style={{ width: "30vw", height: "35px", borderRadius: "5px" }}
          />
          <IconButton
            style={{
              width: "6%",
              borderRadius: "5px",
              backgroundColor: "#A03FE9",
            }}
            icon={<md.MdSearch size={"100%"} style={{ color: "#FFF" }} />}
          />
        </NavMenu>
        {login ? (
          <NavDropdown
            title="username"
            id="basic-nav-dropdown"
            style={{ paddingTop: "0.5%", paddingRight: "1%" }}
          >
            <NavDropdown.Item href="/editprofile">
              Manage Profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">
              Forget Password
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href="/"
              onClick={() => {
                setlogin(false);
              }}
            >
              Sign Out
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
          <NavBtn>
            <button
              onClick={() => setShowPopUp(true)}
              style={{
                backgroundColor: "#A03FE9",
                color: "#FFF",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingRight: "20px",
                paddingLeft: "20px",
                borderRadius: "10px",
              }}
            >
              Sign In
            </button>
          </NavBtn>
        )}
      </Nav>
    </>
  );
};

export default TopNavbar;
