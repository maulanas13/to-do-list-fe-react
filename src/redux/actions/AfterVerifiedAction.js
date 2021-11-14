const afterEmailVerified = (data) => {
  return async (dispatch) => {
    try {
      console.log(data);
      dispatch({type: "AFTER_VERIFIED", payload: data})
    } catch (error) {
      console.log("Error, from afterEmailVerified:", error);
    };
  };
};

export default afterEmailVerified;