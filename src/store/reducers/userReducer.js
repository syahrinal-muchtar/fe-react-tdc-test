const initialState = {
  users: [],
  userDetail: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USERS":
      return {
        ...state,
        users: payload,
      };
    case "SET_USER":
      return {
        ...state,
        userDetail: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default userReducer;
