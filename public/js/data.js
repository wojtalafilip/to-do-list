export let tasksArr = JSON.parse(localStorage.getItem(`tasksArr`) || `[]`);
export function cleanArr(arr) {
  tasksArr = arr;
}
export let activeState = 1;
export function modifyActiveState(statusNumber) {
  activeState = statusNumber;
}

export const DATE = new Date();

export const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const TASK_OBJECT = {
  id: ``,
  data: ``,
  done: ``,
};
