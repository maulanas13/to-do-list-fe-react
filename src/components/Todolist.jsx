import React, { useState } from "react";
import CalenderJs from "./CalenderJs";
import "./todolist.css";

function Todolist() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [week, setWeek] = useState(0);
  const calender = CalenderJs(currentYear, currentMonth, null, 5);

  const daysInMonth = (year, monthNumber) => {
    let february;

    if (year % 4 === 0) {
      february = 29;
    } else {
      february = 28;
    }

    const days = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return days[monthNumber - 1];
  };

  const renderDays = (index) => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[index];
  };

  const renderActivity = () => {
    return (
      <>
        <div
          className="todolist-activity mr-1 my-1 px-1 align-self-start"
          style={{ fontWeight: "400" }}
        >
          asdasdasdasdasdss
        </div>
        <div
          className="todolist-activity mr-1 my-1 px-1 align-self-start"
          style={{ fontWeight: "400" }}
        >
          asdasdasdasdasdss
        </div>

        <div
          className="d-flex align-items-end"
          style={{ fontSize: "10px", fontWeight: "400" }}
        >
          2+ more...
        </div>
      </>
    );
  };

  const renderCalender = () => {
    let count = 1;
    let currentDate = new Date();

    return calender.map((el, id) =>
      el.map((elDate, idDate) => {
        let days;
        let warna = "lightslategray";
        let className =
          "calender-hover tes d-flex justify-content-center align-items-center";

        if (id === 0) {
          days = (
            <div className="pb-1" style={{ color: "lightslategray" }}>
              {renderDays(idDate)}
            </div>
          );
        }

        if (
          idDate ===
            new Date(`${currentYear}-${currentMonth}-${count}`).getDay() &&
          currentMonth ===
            new Date(`${currentYear}-${currentMonth}-${count}`).getMonth() + 1
        ) {
          warna = "darkslategray";
          count++;

          if (
            elDate === currentDate.getDate() &&
            currentMonth === currentDate.getMonth() + 1 &&
            currentYear === currentDate.getFullYear()
          ) {
            warna = "white";
            className += " calender-current-date";
          }
        } else {
          if (count > daysInMonth(currentYear, currentMonth)) {
            count++;
          } else {
            count = 1;
          }
        }

        return (
          <div className="todolist-date">
            <div
              className="d-flex flex-column align-items-center pt-2 h-100"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              {days}
              <div
                className={className}
                style={{ color: warna, cursor: "pointer" }}
              >
                {elDate}
              </div>
              <div className="d-flex flex-column align-items-center w-100 h-75 justify-content-start">
                {renderActivity()}
              </div>
            </div>
          </div>
        );
      })
    );
  };

  return <div className="todolist-grid">{renderCalender()}</div>;
}

export default Todolist;
