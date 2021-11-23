import Calender from "./../../components/Calender";
import Header from "./../../components/Header";
import Todolist from "./../../components/Todolist";
import ModalTask from "./../../components/Modal";
import PopoverComponent from "./../../components/Popover";

import { AiOutlineClockCircle, AiOutlineFileImage } from "react-icons/ai";
import { MdNotes } from "react-icons/md";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);
  const [targetPopover, setTargetPopover] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activity, setActivity] = useState("");
  const [notes, setNotes] = useState("");
  const [startHourInput, setStartHourInput] = useState("0000");
  const [endHourInput, setEndHourInput] = useState("0000");
  const [startHour, setStartHour] = useState("00:00");
  const [endHour, setEndHour] = useState("00:00");

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
      "Desember",
    ];

    return `${days[currentDate.getDay()]}, ${
      months[currentDate.getMonth() + 1]
    } ${currentDate.getDate()}`;
  };

  const onChangeHour = (e) => {
    let numb = e.target.value;

    if (numb.length > 4) {
      return numb.slice(0, 4);
    }
    if (e.target.dataset.hour === "start") {
      setStartHourInput(numb);
      setStartHour(numb);
    } else {
      setEndHourInput(numb);
      setEndHour(numb);
    }
  };

  const onBlurHour = (e) => {
    if (e.target.dataset.hour === "start") {
      let sliceHour = startHourInput.slice(0, 2);
      let sliceMinute = startHourInput.slice(2, 4);

      setStartHour(`${sliceHour}:${sliceMinute}`);
    } else {
      let sliceHour = endHourInput.slice(0, 2);
      let sliceMinute = endHourInput.slice(2, 4);

      setEndHour(`${sliceHour}:${sliceMinute}`);
    }
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
              <div style={{ width: "25%" }}>
                <input
                  type="text"
                  placeholder="00"
                  onChange={onChangeHour}
                  onBlur={onBlurHour}
                  value={startHour}
                  data-hour="start"
                  className="d-flex justify-content-center text-center w-100 time-input"
                />
              </div>
              <div className="W-25 mx-2">-</div>
              <div style={{ width: "25%" }}>
                <input
                  type="text"
                  placeholder="00"
                  onChange={onChangeHour}
                  onBlur={onBlurHour}
                  value={endHour}
                  data-hour="end"
                  className="d-flex justify-content-center text-center w-100 time-input"
                />
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="mr-3">
              <AiOutlineFileImage style={{ fontSize: "1.5em" }} />
            </div>
            <label for="upload-file" className="upload-file">
              Add Image
            </label>
            <input type="file" id="upload-file" style={{ display: "none" }} />
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
      />
    );
  };

  const renderPopover = () => {
    return (
      <div style={{ width: "100px", height: "200px" }}>
        <PopoverComponent
          open={openPopover}
          anchorEl={targetPopover}
          handleClose={() => setOpenPopover(!openPopover)}
        />
      </div>
    );
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

export default App;
