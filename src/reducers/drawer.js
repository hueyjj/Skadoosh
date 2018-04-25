import * as types from "../constants/DrawerActions";

const initialState = {
};

const drawer = (state = initialState, action) => {
  switch (action.type) {
    case (types.DRAWER_SHOW): {
      return {
        ...state,
        isDrawerOpen: true,
      };
    }
    case (types.DRAWER_HIDE): {
      return {
        ...state,
        isDrawerOpen: false,
      }
    }
    default:
      return state;
  }
}

export default drawer;