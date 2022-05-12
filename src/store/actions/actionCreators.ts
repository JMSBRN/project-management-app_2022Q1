import { Actions } from "./actionTypes";

export const setUserName = (userName: string) => ({
    type: Actions.SET_NAME,
    payload: userName,
  });
export const setUserBirth = (userEmail: string) => ({
    type: Actions.SET_EMAIL,
    payload: userEmail,
});
export const setUserCountry = (userPassword: string) => ({
    type: Actions.SET_PASSWORD,
    payload: userPassword,
});
export const setTaskName = (taskName: string) => ({
    type: Actions.SET_EMAIL,
    payload: taskName,
});
export const setTaskDescr = (taskDescr: string) => ({
    type: Actions.SET_PASSWORD,
    payload: taskDescr,
});