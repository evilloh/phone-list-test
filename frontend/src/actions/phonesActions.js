import { GET_PHONES, GET_PHONE } from './types';
import axios from 'axios';

export const getPhones = () => async dispatch => {
  const res = await axios.get('http://localhost:3001/phones');
  dispatch ({
    type: GET_PHONES,
    payload: res.data
  });
};

export const getPhone = id => async dispatch => {
  const res = await axios.get('http://localhost:3001/phones');
  const phones = res.data
  let newArray = []
  newArray = phones.filter(function (el) {
  return el.id == id
  });
  dispatch ({
    type: GET_PHONE,
    payload: newArray[0]
  });
};
