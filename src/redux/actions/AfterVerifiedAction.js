const afterEmailVerified = (data) => {
  return async (dispatch) => {
    try {
      dispatch({type: "AFTER_VERIFIED", payload: data})
    } catch (error) {
      console.log("Error, from afterEmailVerified:", error);
    };
  };
};

export default afterEmailVerified;