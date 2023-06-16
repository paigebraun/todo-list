import { lists, dim } from './globals';
import { listBtns } from './newLists';
import { displayHomeTaskArea } from '.';
import { displayAllTasks } from './allTasks';
import { displayListView } from './listView';

//add new task
const addTaskBtn = document.getElementById('addTaskBtn');
const newTaskPopup = document.getElementById('newTask');
const newTaskCancel = document.querySelector('.newTaskCancel');

addTaskBtn.addEventListener('click', displayNewTask);

function displayNewTask() {
    newTaskPopup.style.display = 'flex';
    dim.style.display = 'block';
}

newTaskCancel.addEventListener('click', hideNewTask);

//task object constructor
class Task {
    constructor(taskName, list, dueDate, completed) {
        this.taskName = taskName;
        this.list = list;
        this.dueDate = dueDate;
        this.completed = 'false';
    }
}

//create new task with user input from new task form
const newTaskName = document.getElementById('newTaskName');
const dueDate = document.getElementById('dueDate');

function hideNewTask() {
    newTaskName.value = '';
    sBtn_text.innerText = options[0].innerText.replace(/\n/g, '');
    dueDate.value = '';
    newTaskPopup.style.display = 'none';
    dim.style.display = 'none';
}

function createTask(taskName, list, dueDate, completed) {
    let newTask = new Task(taskName, list, dueDate);
    //add new task to appropriate list
    for (let i = 0; i < lists.length; i++) {
        if (lists[i].title === list) {
            lists[i].tasks.push(newTask);

            //update task count
            for (let j = 0; j < listBtns.children.length; j++) {
                if (listBtns.children[j].children[0].innerText === list) {
                    listBtns.children[j].children[1].innerText = lists[i].tasks.length;
                }
            }
        }
    }

    //update display - need to figure out what display we're on
    const selected = document.querySelector('.selected');
    if (selected.classList[0] === 'today') {
        displayHomeTaskArea();
    }
    if (selected.classList[0] === 'allTasks') {
        displayAllTasks();
    }
    if (selected.classList[0] === 'selected') {
        //we're on an individual list, figure out which one
        const listButton = document.querySelectorAll('.listButton');
        for (let i=0; i < listButton.length; i++) {
            if (listButton[i].firstChild.classList[0] === 'selected') {
                displayListView(listButton[i].firstChild);
            }
        }
    }
    //clear inputs and hide new task
    hideNewTask();
}

//add list to dropdown menu option on new task popup
const optionsList = document.querySelector('.options');
function addListDropdown() {
    while (optionsList.firstChild){
        optionsList.removeChild(optionsList.firstChild);
    }
    for (let i = 0; i < lists.length; i++) {
        const liOption = document.createElement('li');
        liOption.className = 'option';
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.backgroundColor = lists[i].color;
        const optionText = document.createElement('span');
        optionText.className = 'option-text';
        optionText.innerText = lists[i].title;
        optionsList.appendChild(liOption);
        liOption.appendChild(dot);
        liOption.appendChild(optionText);
    }
}
addListDropdown();

//dropdown menu functionality
const optionMenu = document.querySelector(".select-menu");
const selectBtn = optionMenu.querySelector(".select-btn");
let options = optionMenu.querySelectorAll(".option");
const sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

function dropDownHelper() {
    let options = optionMenu.querySelectorAll(".option");
    options.forEach(option =>{
        option.addEventListener("click", ()=>{
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
    
            optionMenu.classList.remove("active");
        });
    });
}

dropDownHelper();

export {createTask, sBtn_text, addListDropdown, dropDownHelper };