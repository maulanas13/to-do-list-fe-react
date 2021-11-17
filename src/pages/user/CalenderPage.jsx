import React, { Component } from "react";
import Todolist from "./../../components/Todolist";
import Header from "./../../components/Header";
import Calender from "./../../components/Calender";

class Calendar extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="row"
          style={{
            height: "7vh",
            borderBottom: "1px solid gainsboro",
          }}
        >
          <Header />
        </div>
        <div className="row">
          <div className="col-2 mr-3">
            <div className="my-3">
              <button
                className="calender-create py-2 px-4"
                style={{ fontSize: "15px" }}
              >
                Create
              </button>
            </div>
            <Calender />
          </div>
          <div className="col-sm" style={{ height: "93vh" }}>
            <Todolist />
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
