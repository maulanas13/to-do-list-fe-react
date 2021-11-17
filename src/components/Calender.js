import "../App.css";
import CalenderJs from "./CalenderJs";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";

function Calender() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [lastPick, setLastPick] = useState("");
  const calender = CalenderJs(currentYear, currentMonth, null, 6);

  console.log(lastPick);

  const renderDays = () => {
    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    return days.map((el, index) => {
      return (
        <div key={index} className="col-1 d-flex justify-content-center">
          {el}
        </div>
      );
    });
  };

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

  const renderMonth = (monthIdx) => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Desember",
    ];

    return month[monthIdx - 1];
  };

  const renderDate = () => {
    let count = 1;
    const currentDate = new Date();

    return calender.map((el, index) => {
      return (
        <div key={index} className="row d-flex justify-content-between">
          {el.map((elDate, indexDate) => {
            let warna = "lightslategray";
            let className =
              "calender-hover tes d-flex justify-content-center align-items-center";
            let value = `${currentYear}-${currentMonth}-${elDate}`;

            if (
              indexDate ===
                new Date(`${currentYear}-${currentMonth}-${count}`).getDay() &&
              currentMonth ===
                new Date(`${currentYear}-${currentMonth}-${count}`).getMonth() +
                  1
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

              if (value === lastPick) {
                className += " calender-pick-date";
                console.log("masuk", value);
              }
            } else {
              if (count > daysInMonth(currentYear, currentMonth)) {
                count++;

                if (currentMonth >= 12) {
                  value = `${currentYear + 1}-${1}-${elDate}`;
                } else {
                  value = `${currentYear}-${currentMonth + 1}-${elDate}`;
                }
              } else {
                count = 1;
                if (currentMonth <= 1) {
                  value = `${currentYear - 1}-${12}-${elDate}`;
                } else {
                  value = `${currentYear}-${currentMonth - 1}-${elDate}`;
                }
              }
            }

            return (
              <div
                key={elDate}
                className="col-1 d-flex justify-content-center current-date my-1"
                style={{ cursor: "pointer" }}
              >
                <form>
                  <span className={className} style={{ padding: "6px" }}>
                    <label
                      for={value}
                      className="col-form-label p-2"
                      style={{
                        fontWeight: "600",
                        color: warna,
                        cursor: "pointer",
                      }}
                    >
                      {elDate}
                    </label>
                  </span>

                  <input
                    type="radio"
                    id={value}
                    name="dates"
                    value={value}
                    checked={value === lastPick}
                    style={{
                      display: "none",
                    }}
                    onChange={(e) => onChangeDate(e, elDate)}
                  />
                </form>
              </div>
            );
          })}
        </div>
      );
    });
  };

  const handleNextMonth = () => {
    if (currentMonth >= 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth <= 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const onChangeDate = (e, date) => {
    const currentDate = new Date();
    const pick = document.querySelectorAll(".tes");

    pick.forEach((el) => el.classList.remove("calender-pick-date"));

    setLastPick(e.target.value);

    if (e.target.value === `${currentYear}-${currentMonth + 1}-${date}`) {
      setCurrentMonth(currentMonth + 1);
    } else if (e.target.value === `${currentYear + 1}-${1}-${date}`) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    }

    if (e.target.value === `${currentYear}-${currentMonth - 1}-${date}`) {
      setCurrentMonth(currentMonth - 1);
    } else if (e.target.value === `${currentYear - 1}-${12}-${date}`) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    }

    if (
      e.target.value ===
      `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`
    ) {
      return;
    } else {
      e.target.previousSibling.classList.toggle("calender-pick-date");
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        width: "210px",
        height: "215px",
      }}
    >
      <div className="d-flex flex-column" style={{ height: "30px" }}>
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div
              className="ml-2 d-flex align-items-center justify-content-center"
              style={{
                fontSize: "0.8em",
                fontWeight: "600",
                color: "darkslategray",
              }}
            >
              <div className="mr-1">{renderMonth(currentMonth)}</div>
              <div>{currentYear}</div>
            </div>

            <div
              className="mr-1 d-flex justify-content-end "
              style={{ fontSize: "1.1em", color: "dimgray" }}
            >
              <div className="d-flex align-items-center mr-2">
                <MdKeyboardArrowLeft
                  className="calender-hover"
                  style={{ cursor: "pointer" }}
                  onClick={handlePrevMonth}
                />
              </div>
              <div className="d-flex align-items-center ">
                <MdKeyboardArrowRight
                  className="calender-hover"
                  style={{ cursor: "pointer" }}
                  onClick={handleNextMonth}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ fontSize: "10px" }}>
          <div
            className="row d-flex justify-content-between mt-2 mb-2"
            style={{ fontWeight: "600", color: "dimgray" }}
          >
            {renderDays()}
          </div>
          {renderDate()}
        </div>
      </div>
    </div>
  );
}

export default Calender;
