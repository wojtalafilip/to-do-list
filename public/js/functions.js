import { DATE, DAYS, MONTHS, TASK_OBJECT, tasksArr, cleanArr } from "./data.js";
import {
  day,
  month,
  inputField,
  tasksContainer,
  stateAllBtn,
  stateDoneBtn,
  stateRemainBtn,
} from "./variables.js";

export const setDate = () => {
  const dayOfWeek = DATE.getDay() - 1;
  const dayOfMonth = DATE.getDate();
  const monthOfYear = DATE.getMonth();
  day.innerHTML = `${DAYS[dayOfWeek]}, ${dayOfMonth}`;
  month.innerHTML = `${MONTHS[monthOfYear]} ☀️`;
};

export const removeAllData = () => {
  cleanArr([]);
  localStorage.setItem(`tasksArr`, JSON.stringify(tasksArr));
  console.log(`REMOVE`, tasksArr);
};

export const removeAllTasks = () => {
  document.querySelectorAll(`.task`).forEach((el) => el.remove());
};

export const addData = () => {
  const taskTemp = Object.create(TASK_OBJECT);
  taskTemp.id = Date.now();
  taskTemp.data = `${inputField.value}`;
  taskTemp.done = false;
  tasksArr.push(taskTemp);
  localStorage.setItem(`tasksArr`, JSON.stringify(tasksArr));
};

export const renderTasks = (arr, stateNumber = 1) => {
  console.log(`RENDER`, arr);

  let activeArr = arr;
  if (stateNumber === 2) activeArr = tasksArr.filter((task) => task.done);
  if (stateNumber === 3) activeArr = tasksArr.filter((task) => !task.done);
  activeArr.forEach((el) => {
    const newTask = document.createElement(`div`);
    newTask.setAttribute(`id`, `${el.id}`);
    newTask.classList.add(
      `task`,
      `flex`,
      `items-center`,
      `border-b`,
      `p-2`,
      `py-2`
    );
    const newTaskIcon = document.createElement(`i`);
    newTaskIcon.classList.add(`icon`, `ph-bold`, `ph-circle`, `text-xl`);
    const newTaskData = document.createElement(`p`);
    newTaskData.classList.add(`task__data`, `ml-3`);
    newTaskData.innerHTML = `${el.data}`;
    const newTaskButton = document.createElement(`button`);
    newTaskButton.classList.add(`task__remove-btn`, `ml-auto`);
    const newTaskButtonIcon = document.createElement(`i`);
    newTaskButtonIcon.classList.add(`icon`, `ph-bold`, `ph-x`);
    tasksContainer.appendChild(newTask);
    newTask.append(newTaskIcon);
    newTask.append(newTaskData);
    newTask.append(newTaskButton);
    newTaskButton.append(newTaskButtonIcon);

    if (el.done) {
      newTaskIcon.classList.add(`text-teal-600`);
      newTaskIcon.classList.remove(`ph-bold`);
      newTaskIcon.classList.add(`ph-fill`);
      newTaskData.classList.add(`task__data--done`);
    }

    newTaskButton.addEventListener(`click`, () => {
      tasksArr.splice(
        tasksArr.indexOf(tasksArr.find((task) => task.id === el.id)),
        1
      );
      activeArr.splice(
        activeArr.indexOf(activeArr.find((task) => task.id === el.id)),
        1
      );
      localStorage.setItem(`tasksArr`, JSON.stringify(tasksArr));
      console.log(`REMOVE ARR`, activeArr);
      console.log(`REMOVE TASKS ARR`, tasksArr);
      removeAllTasks();
      renderTasks(activeArr);
    });
  });
};

export const baseState = () => {
  inputField.value = ``;
  stateDoneBtn.classList.remove(`state__btn--active`);
  stateRemainBtn.classList.remove(`state__btn--active`);
  stateAllBtn.classList.add(`state__btn--active`);
};

export const changeState = (event) => {
  let container = event.target.closest(`div`);
  let stateButton = event.target.closest(`.state__btn`);
  container.children[0].classList.remove(`state__btn--active`);
  container.children[1].classList.remove(`state__btn--active`);
  container.children[2].classList.remove(`state__btn--active`);
  stateButton.classList.add(`state__btn--active`);
};

// export const markAsDone = (task) => {
//   task.children[0].classList.toggle(`text-teal-600`);
//   task.children[0].classList.toggle(`ph-fill`);
//   task.children[0].classList.toggle(`ph-bold`);
//   task.children[1].classList.toggle(`task__data--done`);
// };

export const updateData = (task) => {
  const activeTask = tasksArr.find((element) => element.id === +task.id);
  const activeTaskIndex = tasksArr.indexOf(activeTask);
  tasksArr[activeTaskIndex].done = !activeTask.done;
  localStorage.setItem(`tasksArr`, JSON.stringify(tasksArr));
};
