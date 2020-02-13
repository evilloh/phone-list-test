import { GET_PHONES, GET_PHONE } from '../actions/types';

const initialState = {
  Phones: [],
  Phone: {},
};

export default function(state = initialState, action) 
  {
  switch(action.type) {
    case GET_PHONES:
      return {
        ...state,
        Phones: action.payload
      };
    case GET_PHONE:
      return {
        ...state,
        Phone: action.payload
      };
    default: 
      return state;
  }
}