import './styles.css';

//get todays date, time of day, and weekday
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var hourOfDay = today.getHours();
var weekday = today.getDay();

//display todays info on homepage
var todaysDate = document.getElementById('todaysDate');
todaysDate.innerText = mm + '/' + dd + '/' + yyyy;
let calendarDate = yyyy + '-' + mm + '-' + dd;

var timeOfDay = document.getElementById('timeOfDay');
if (hourOfDay < 12) {
    timeOfDay.innerText = 'Morning,';
}
else if ((hourOfDay >= 12) && (hourOfDay < 17)) {
    timeOfDay.innerText = 'Afternoon,';
}
else {
    timeOfDay.innerText = 'Evening,';
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var dayOfWeek = document.getElementById('dayOfWeek');
dayOfWeek.innerText = days[weekday];

//add new task
const addTaskBtn = document.getElementById('addTaskBtn');
const newTaskPopup = document.getElementById('newTask');
const newTaskCancel = document.querySelector('.newTaskCancel');
const newTaskAdd = document.querySelector('.newTaskAdd');
const dim = document.querySelector('.dim');
addTaskBtn.addEventListener('click', displayNewTask);

function displayNewTask() {
    newTaskPopup.style.display = 'flex';
    dim.style.display = 'block';
}

newTaskCancel.addEventListener('click', hideNewTask);

//list object constructor
class ListObj {
    constructor(title, color, tasks) {
        this.title = title;
        this.color = color;
        this.tasks = tasks;
    }
}

//store lists
const listBtns = document.querySelector('.listBtns');
let lists = [];
createList('Personal', '#71CD50', []);
createList('Work', '#FB9535', []);
createList('Grocery', '#F173BF', []);

//create new list objects
function createList(title, color, tasks) {
    let newList = new ListObj(title, color, tasks);
    lists.push(newList);
}

//display lists
for (let i = 0; i < lists.length; i++) {
    displayList(lists[i]);
}

function displayList(listObject){
    const listDiv = document.createElement('div');
    listDiv.className = 'listButton';
    const listNameBtn = document.createElement('button');
    listNameBtn.innerText = listObject.title;
    listDiv.appendChild(listNameBtn);
    const taskCount = document.createElement('div');
    taskCount.className = 'taskCount';
    taskCount.style.backgroundColor = listObject.color;
    taskCount.innerText = '0';
    listDiv.appendChild(taskCount);

    listBtns.appendChild(listDiv);
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

//task object constructor
class Task {
    constructor(taskName, list, dueDate) {
        this.taskName = taskName;
        this.list = list;
        this.dueDate = dueDate;
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

const tasksArea = document.querySelector('.tasksArea');

newTaskAdd.addEventListener('click', function() {
    createTask(newTaskName.value, sBtn_text.innerText, dueDate.value);
});

createTask('Schedule Dr. Appt', 'Personal', calendarDate);
createTask('Get groceries', 'Personal', calendarDate);
createTask('Send new design', 'Work', calendarDate);
createTask('Check emails', 'Work', calendarDate);
createTask('Lunch with Emma', 'Work', calendarDate);
createTask('Research project', 'Work', calendarDate);

function createTask(taskName, list, dueDate) {
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
    //update display
    displayHomeTaskArea();
    //clear inputs and hide new task
    hideNewTask();
}


// display tasks on homepage (due today)
function displayHomeTaskArea() {
    //delete all current children
    while (tasksArea.firstChild) {
        tasksArea.removeChild(tasksArea.lastChild);
    }
    for (let i = 0; i < lists.length; i++) {
        //make sure list isn't empty
        console.log(lists);
        if (lists[i].tasks.length === 0) {
            console.log(lists[i].tasks, 'skippin');
            i++
        }
        else {
            //find tasks with due date of today
            let dueToday = [];
            for (let j =0; j < lists[i].tasks.length; j++) {
                if (lists[i].tasks[j].dueDate === calendarDate) {
                    dueToday.push(lists[i].tasks[j]);
                }
            }
            if (dueToday.length !== 0) {
                const taskCard = document.createElement('div');
                taskCard.className = 'taskCard';
                const listName = document.createElement('h2');
                listName.className = 'listName';
                listName.innerText = lists[i].title;

                taskCard.appendChild(listName);
                tasksArea.appendChild(taskCard);

                for (let k = 0; k < dueToday.length; k++) {
                    const taskLabel = document.createElement('label');
                    taskLabel.className = 'task';
                    taskCard.appendChild(taskLabel);
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.className = 'strike';
                    taskLabel.appendChild(checkbox);
                    const taskSpan = document.createElement('span');
                    taskSpan.innerText = dueToday[k].taskName;
                    taskLabel.appendChild(taskSpan);
                    const checkmark = document.createElement('span');
                    checkmark.className = 'checkmark';
                    taskLabel.appendChild(checkmark);
                }
            }
        }
    }
        
}
displayHomeTaskArea();

//New List popup functionality

//Add new list
const addListBtn = document.getElementById('addBtn');
const newListPopup = document.getElementById('newList');
const newListCancel = document.querySelector('.newListCancel');
const newListAdd = document.querySelector('.newListAdd');
const newListName = document.getElementById('newListName');
addListBtn.addEventListener('click', displayNewList);
newListCancel.addEventListener('click', hideNewList);

const colors = document.querySelectorAll('input[name=color]')
function displayNewList() {
    newListPopup.style.display = 'flex';
    dim.style.display = 'block';
}

function hideNewList() {
    newListName.value = '';
    for (let i = 0; i < colors.length; i++) {
        if (colors[i].checked) {
            colors[i].checked = false;
        }
    }
    colors[0].checked = true;
    newListPopup.style.display = 'none';
    dim.style.display = 'none';
}

const listOfColors = ['#71CD50', '#FB9535', '#F173BF', '#F6D14B', '#EF543F', '#67C7C1', '#9C69DE', '#505050'];

newListAdd.addEventListener('click', function() {
    let colorNum = document.querySelector('input[name="color"]:checked');
    let colorSelected = listOfColors[Number(colorNum.value)];
    createList(newListName.value, colorSelected, []);
    hideNewList();
    displayList(lists[lists.length - 1]);
    addListDropdown();
    dropDownHelper();
})