import { TOGGLE_ADD, TOGGLE_EDIT } from "../actionTypes/edit";

const intialState = {
  edit: false,
};

const EditReducer = (state = intialState, { type }) => {
  switch (type) {
    case TOGGLE_ADD:
      return { ...state, edit: false };
    case TOGGLE_EDIT:
      return { ...state, edit: true };

    default:
      return state;
  }
};

export default EditReducer;
