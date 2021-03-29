//importer les actions types
import {
  GET_CONTACTS,
  LOAD_CONTACT,
  FAIL_CONTACT,
  GET_CONTACT,
} from "../actionTypes/contacts";
//initialier state 
const intialState = {
  contacList: [],
  loadContact: false,
  errors: null,
  contact: {},
};
// pure fonction 
const contactReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACT:
      return { ...state, loadContact: true };
    case GET_CONTACTS:
      return { ...state, contacList: payload.result, loadContact: false };
    case FAIL_CONTACT:
      return {
        ...state,
        loadContact: false,
        errors: payload,
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: payload,
      };

    default:
      return state;
  }
};

export default contactReducer;
