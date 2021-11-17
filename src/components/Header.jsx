import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

function Header() {
  return (
    <nav className="container-fluid d-flex align-items-center w-100 h-100">
      <div className="row w-100">
        <div
          className="col-2 d-flex align-items-center w-100 mr-4"
          style={{ fontSize: "1.2em", fontWeight: "500" }}
        >
          To-Do-List
        </div>
        <div className="col-sm d-flex align-items-center">
          <div className="d-flex " style={{ fontSize: "1.5em" }}>
            <div className="mr-3">
              <MdKeyboardArrowLeft />
            </div>
            <div>
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
