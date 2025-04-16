import React from "react";
import logo from "./logo.png";
import "./components.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  return (
    <div className="navComp">
      <div className="header">
        <div className="header-left">
          <div className="logoDiv">
            <img alt="logo" src={logo} />
          </div>
          <div className="components">
            <button>PRODUCTS</button>
            <button>PRICING</button>
            <button>COMMUNITY</button>
            <div className="media-button-wrapper">
              <button className="btn">
                MEDIA<i className="bi bi-caret-down-fill"></i>
              </button>
            </div>
            <div className="media-button-wrapper">
              <button className="btn">
                SUPPORT<i className="bi bi-arrow-up-right arrowIcon"></i>
              </button>
            </div>{" "}
          </div>
        </div>
        <div className="header-right">
          <div className="ragister">
            <div className="signin border-0">
              <button>Sign In</button>
            </div>
            <div className="signup">
              <button>Sign Up Now</button>
            </div>
          </div>
          <button className="btn menuIcon">
            <i className="bi bi-three-dots-vertical"></i>{" "}
            <i className="bi bi-three-dots-vertical"></i>
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
