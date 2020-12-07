import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const getBudgets = (user_id) => {
  return new Promise(function (resolve, reject) {
    axios.get(`${API_URL}/budget/user/${user_id}`).then((response) => {
      return resolve(response.data);
    });
  }).then((result) => {
    return result;
  });
};

export const getPurchases = (user_id) => {
  return new Promise(function (resolve, reject) {
    axios.get(`${API_URL}/purchase/user/${user_id}`).then((response) => {
      return resolve(response.data);
    });
  }).then((result) => {
    return result;
  });
};

export const getItems = (user_id) => {
  return new Promise(function (resolve, reject) {
    axios.get(`${API_URL}/item/user/${user_id}`).then((response) => {
      return resolve(response.data);
    });
  }).then((result) => {
    return result;
  });
};
