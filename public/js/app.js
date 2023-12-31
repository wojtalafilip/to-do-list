import { tasksArr, activeState, modifyActiveState } from "./data.js";
import {
  setDate,
  addData,
  removeAllTasks,
  renderTasks,
  removeAllData,
  updateData,
  changeState,
  baseState,
} from "./functions.js";
import {
  addBtn,
  removeAllBtn,
  stateContainer,
  stateRemainBtn,
  stateDoneBtn,
  stateAllBtn,
  tasksContainer,
} from "./variables.js";

window.addEventListener(`load`, () => {
  setDate();
  renderTasks(tasksArr);
});

removeAllBtn.addEventListener(`click`, () => {
  removeAllData();
  removeAllTasks();
});

addBtn.addEventListener(`click`, () => {
  addData();
  removeAllTasks();
  renderTasks(tasksArr);
  baseState();
});

stateContainer.onclick = function (event) {
  if (event.srcElement.localName === `div`) return;
  changeState(event);
};

stateAllBtn.addEventListener(`click`, () => {
  removeAllTasks();
  modifyActiveState(1);
  renderTasks(tasksArr, activeState);
});

stateDoneBtn.addEventListener(`click`, () => {
  removeAllTasks();
  modifyActiveState(2);
  renderTasks(tasksArr, activeState);
});

stateRemainBtn.addEventListener(`click`, () => {
  removeAllTasks();
  modifyActiveState(3);
  renderTasks(tasksArr, activeState);
});

tasksContainer.onclick = function (event) {
  if (event.srcElement.localName === `i`) return;
  if (event.srcElement.localName === `button`) return;
  let task = event.target.closest(`div`);
  updateData(task);
  removeAllTasks();
  renderTasks(tasksArr, activeState);
};
