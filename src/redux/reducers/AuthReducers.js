const INITIAL_STATE = {
  id: 0,
  username: "",
  password: "",
  email: "",
  role: "",
  isLogin: false,
};

const AuthReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return state;

    default:
      return state;
  }
};

export default AuthReducers;
