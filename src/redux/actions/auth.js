import * as types from "./types";

export const signIn = (user) => {
  return {
    type: types.SIGN_IN,
    payload: user,
  };
};

export const signOut = () => {
  return {
    type: types.SIGN_OUT,
  };
};

export const getUser = (user) => {
  return {
    type: types.GET_USER,
    payload: user,
  };
};

export const createUser = (user) => {
  return {
    type: types.CREATE_USER,
    payload: user,
  };
};
