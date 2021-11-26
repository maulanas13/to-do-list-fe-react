import { useState } from "react";
import Calender from "./../../components/Calender";
import Header from "./../../components/Header";
import Todolist from "./../../components/Todolist";
import ModalTask from "./../../components/Modal";
import PopoverComponent from "./../../components/Popover";
import { AiOutlineClockCircle, AiOutlineFileImage } from "react-icons/ai";
import { MdNotes } from "react-icons/md";
import axios from "axios";
import API_URL from "../../helpers/ApiUrl";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function CalenderPage() {
  const [openModal, setOpenModal] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);
  const [targetPopover, setTargetPopover] = useState("");
  const [activity, setActivity] = useState("");
  const [notes, setNotes] = useState("");
  const [startHour, setStartHour] = useState("");
  const [startMinute, setStartMinute] = useState("");
  const [endHour, setEndHour] = useState("");
  const [endMinute, setEndMinute] = useState("");
  const [file, setFile] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.calenderReducers);

  const handlePopover = (e) => {
    setOpenPopover(!openPopover);
    setTargetPopover(e.target);
  };

  const renderDate = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
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
      "December",
    ];

    return `${days[new Date(data.currentDate).getDay()]}, ${
      months[new Date(data.currentDate).getMonth()]
    } ${new Date(data.currentDate).getDate()}`;
  };

  const onChangeHour = (e) => {
    let numb = e.target.value;

    if (numb.length > 2) {
      return numb.slice(0, 2);
    }

    if (e.target.name == "startHour") {
      setStartHour(e.target.value);
      if (e.target.value >= 24) {
        alert("invalid input");
        setStartHour("23");
      } else if (e.target.value < 0) {
        alert("invalid input");
        setStartHour("00");
      }
    } else if (e.target.name == "startMinute") {
      setStartMinute(e.target.value);
      if (e.target.value >= 60) {
        alert("invalid input");
        setStartMinute("59");
      } else if (e.target.value < 0) {
        alert("invalid input");
        setStartMinute("00");
      }
    } else if (e.target.name == "endHour") {
      setEndHour(e.target.value);
      if (e.target.value >= 24) {
        alert("invalid input");
        setEndHour("23");
      } else if (e.target.value < 0) {
        alert("invalid input");
        setEndHour("00");
      }
    } else if (e.target.name == "endMinute") {
      setEndMinute(e.target.value);
      if (e.target.value >= 60) {
        alert("invalid input");
        setEndMinute("59");
      } else if (e.target.value < 0) {
        alert("invalid input");
        setEndMinute("00");
      }
    }
  };

  const onClickAdd = () => {
    const dataActivity = {
      date: data.currentDate,
      activity,
      notes,
      start_hour: `${startHour}:${startMinute}`,
      end_hour: `${endHour}:${endMinute}`,
    };
    console.log(dataActivity);
  };

  const onClickClose = () => {
    setOpenModal(!openModal);
    setFile("");
    setActivity("");
    setNotes("");
    setStartHour("");
    setStartMinute("");
    setEndHour("");
    setEndMinute("");
    dispatch({
      type: "CHANGEDATE",
      payload: {
        currentDate: `${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}`,
      },
    });
  };

  const renderModalBody = () => {
    return (
      <div>
        <div className="d-flex flex-column align-items-start">
          <div>
            <input
              type="text"
              className="modal-title"
              placeholder="Add Title"
              onChange={(e) => setActivity(e.target.value)}
              value={activity}
            />
          </div>
          <div className="my-4 d-flex align-items-center">
            <div className="mr-4">
              <AiOutlineClockCircle style={{ fontSize: "1.5em" }} />
            </div>
            <div
              className="w-100"
              onClick={handlePopover}
              style={{ cursor: "pointer" }}
            >
              {renderDate()}
            </div>
            <div className="d-flex w-100 align-items-center">
              <div className="w-25 d-flex justify-content-center">
                <div style={{ width: "40%" }}>
                  <input
                    type="number"
                    placeholder="00"
                    onChange={onChangeHour}
                    value={startHour}
                    name="startHour"
                    className="d-flex justify-content-center text-center w-100 time-input"
                  />
                </div>
                <div>:</div>
                <div style={{ width: "40%" }}>
                  <input
                    type="number"
                    placeholder="00"
                    onChange={onChangeHour}
                    value={startMinute}
                    name="startMinute"
                    className="d-flex justify-content-center text-center w-100 time-input"
                  />
                </div>
              </div>
              <div className="W-25 mx-2">-</div>
              <div className="w-25 d-flex justify-content-center">
                <div style={{ width: "40%" }}>
                  <input
                    type="number"
                    placeholder="00"
                    onChange={onChangeHour}
                    value={endHour}
                    name="endHour"
                    className="d-flex justify-content-center text-center w-100 time-input"
                  />
                </div>
                <div>:</div>
                <div style={{ width: "40%" }}>
                  <input
                    type="number"
                    placeholder="00"
                    onChange={onChangeHour}
                    value={endMinute}
                    name="endMinute"
                    className="d-flex justify-content-center text-center w-100 time-input"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex aling-items-center">
            <div className="mr-3">
              <AiOutlineFileImage style={{ fontSize: "1.5em" }} />
            </div>
            <label for="upload-file" className="upload-file mr-3">
              Add Image
            </label>
            <input
              type="file"
              id="upload-file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            {file ? <div>{renderNameFile()}</div> : ""}
          </div>
          <div className="mt-3 d-flex">
            <div className="mr-3">
              <MdNotes style={{ fontSize: "1.5em" }} />
            </div>
            <textarea
              name="notes"
              id=""
              cols="30"
              rows="10"
              placeholder="Add Notes"
              className="w-100 p-2"
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
              style={{ resize: "none", height: "20vh" }}
            >
              asdasd
            </textarea>
          </div>
        </div>
      </div>
    );
  };

  const renderModal = () => {
    return (
      <ModalTask
        isOpen={openModal}
        toggle={() => setOpenModal(!openModal)}
        title="Add Activity"
        body={renderModalBody()}
        doSomething="Add"
        handleDo={onClickAdd}
        handleClose={onClickClose}
      />
    );
  };

  const renderPopover = () => {
    return (
      <div style={{ width: "100px", height: "250px" }}>
        <PopoverComponent
          open={openPopover}
          anchorEl={targetPopover}
          handleClose={() => setOpenPopover(!openPopover)}
        />
      </div>
    );
  };

  const renderNameFile = () => {
    if (file.name.length > 10) {
      let slice = file.name.slice(0, 10);

      return slice + ".......";
    } else {
      return file.name;
    }
  };

  return (
    <div
      className="container-fluid"
      style={{ fontFamily: "'Poppins', sans-serif", maxHeight: "100vh" }}
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
              onClick={() => setOpenModal(!openModal)}
            >
              Create
            </button>
          </div>
          <Calender />
          {renderPopover()}
        </div>
        <div className="col-sm" style={{ height: "93vh" }}>
          <Todolist />
        </div>
      </div>
      {renderModal()}
    </div>
  );
}

export default CalenderPage;
