const initalState = {
  isLoggedIn: false,
};

const mapReducer = {};

const reducer = (state = initalState, action) => {
  return mapReducer[action.type]
    ? mapReducer[action.type](state, action)
    : state;
};

export default reducer;
