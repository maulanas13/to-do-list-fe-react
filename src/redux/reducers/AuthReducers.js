const INITIAL_STATE = {
  id: null,
  username: "",
  email: "",
  role_id: null,
  is_login: null,
  is_verified: null,
};

const authReducers = (state = INITIAL_STATE, action) => {
  console.log("masuk reducers");
  console.log(action.payload)
  switch (action.type) {
    case "AFTER_VERIFIED":
      console.log(state)
      return {...state, ...action.payload, is_login: true};

    default:
      return state;
  }
};

export default authReducers;