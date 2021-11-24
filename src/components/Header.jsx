import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.calenderReducers);

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

  const onClickPrevMonth = () => {
    let payload;
    if (data.currentMonth <= 1) {
      payload = {
        currentMonth: 12,
        currentYear: data.currentYear - 1,
      };
      dispatch({ type: "CHANGEDATE", payload });
    } else {
      dispatch({
        type: "CHANGEDATE",
        payload: { currentMonth: data.currentMonth - 1 },
      });
    }
  };

  const onClickNextMonth = () => {
    let payload;
    if (data.currentMonth >= 12) {
      payload = {
        currentMonth: 1,
        currentYear: data.currentYear + 1,
      };
      dispatch({ type: "CHANGEDATE", payload });
    } else {
      dispatch({
        type: "CHANGEDATE",
        payload: { currentMonth: data.currentMonth + 1 },
      });
    }
  };

  const onClickToday = () => {
    let payload = {
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
    };
    dispatch({ type: "CURRENTDATE", payload });
  };

  return (
    <nav className="container-fluid d-flex align-items-center w-100 h-100">
      <div className="row w-100">
        <div
          className="col-2 d-flex align-items-center w-100 mr-4"
          style={{ fontSize: "1.2em", fontWeight: "500" }}
        >
          To-Do-List
        </div>
        <div className="d-flex align-items-center">
          <button
            className="calender-create py-1 px-3 ml-2"
            style={{ fontSize: "0.7em" }}
            onClick={onClickToday}
          >
            Today
          </button>
        </div>
        <div className="col-sm d-flex align-items-center">
          <div
            className="d-flex "
            style={{ fontSize: "1.5em", color: "dimgray" }}
          >
            <div>
              <MdKeyboardArrowLeft
                className="mr-3 calender-hover"
                style={{ cursor: "pointer" }}
                onClick={onClickPrevMonth}
              />
            </div>
            <div>
              <MdKeyboardArrowRight
                className="mr-3 calender-hover"
                style={{ cursor: "pointer" }}
                onClick={onClickNextMonth}
              />
            </div>
          </div>
          <div className="d-flex">
            <div
              className="mr-2"
              style={{
                fontSize: "1.1em",
                fontWeight: "500",
                color: "darkslategray",
              }}
            >
              {renderMonth(data.currentMonth)}
            </div>
            <div
              style={{
                fontSize: "1.1em",
                fontWeight: "500",
                color: "darkslategray",
              }}
            >
              {data.currentYear}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
