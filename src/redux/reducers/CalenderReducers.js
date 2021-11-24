const INITIAL_STATE = {
  currentMonth: new Date().getMonth() + 1,
  currentYear: new Date().getFullYear(),
  currentDate: `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`,
};

const calenderReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGEDATE":
      return { ...state, ...action.payload };
    case "CURRENTDATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default calenderReducers;
