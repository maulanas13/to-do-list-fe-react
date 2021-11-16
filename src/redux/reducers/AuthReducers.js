const INITIAL_STATE = {
  id: null,
  username: "",
  email: "",
  role_id: null,
  is_login: null,
  is_verified: null,
};

const AuthReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload, isLogin: true };

    default:
      return state;
  }
};

export default AuthReducers;
