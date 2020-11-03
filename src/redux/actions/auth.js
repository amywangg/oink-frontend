import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (user) => {
  console.log(user)
  return {
    type: SIGN_IN,
    payload: user,
  };
};

export const signOut = () => {
  console.log('SIGNING OUT')
  return {
    type: SIGN_OUT,
  };
};
