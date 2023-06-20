import './styles.css';
import { dd, mm, yyyy, calendarDate, hourOfDay, weekday, lists, dim} from './globals';
import { createTask, sBtn_text } from './newTasks';
import { displayAllTasks } from './allTasks';
import { displayListView } from './listView';

//display todays info on homepage
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const rightContainer = document.querySelector('.right');
const allTasksBtn = document.querySelector('.allTasks');
const todayBtn = document.querySelector('.today');
const listBtns = document.querySelector('.listBtns');

const newTaskAdd = document.querySelector('.newTaskAdd');
newTaskAdd.addEventListener('click', function() {
    createTask(newTaskName.value, sBtn_text.innerText, dueDate.value);
});

createTask('Schedule Dr. Appt', 'Personal', calendarDate);
createTask('Get groceries', 'Personal', calendarDate);
createTask('Send new design', 'Work', calendarDate);
createTask('Check emails', 'Work', calendarDate);
createTask('Lunch with Emma', 'Work', calendarDate);
createTask('Research project', 'Work', calendarDate);


// display tasks on homepage (due today)
function displayHomeTaskArea() {
    allTasksBtn.classList.remove('selected');
    todayBtn.classList.add('selected');
    for (let i = 0; i < listBtns.children.length; i++) {
        listBtns.children[i].firstChild.classList.remove('selected');
    }
    
    //clear the right container
    while (rightContainer.firstChild) {
        rightContainer.removeChild(rightContainer.lastChild);
    }
    //build the header
    const greeting = document.createElement('div');
    greeting.className = 'greeting';
    rightContainer.appendChild(greeting);
    const greetingTop = document.createElement('div');
    greetingTop.className = 'greetingTop';
    greeting.appendChild(greetingTop);
    const goodH1 = document.createElement('h1');
    goodH1.innerText = 'Good';
    greetingTop.appendChild(goodH1);
    const timeOfDay = document.createElement('h1');
    if (hourOfDay < 12) {
        timeOfDay.innerText = 'Morning,';
    }
    else if ((hourOfDay >= 12) && (hourOfDay < 17)) {
        timeOfDay.innerText = 'Afternoon,';
    }
    else {
        timeOfDay.innerText = 'Evening,';
    }
    timeOfDay.id = 'timeOfDay';
    greetingTop.appendChild(timeOfDay);
    const greetingBottom = document.createElement('div');
    greetingBottom.className = 'greetingBottom';
    greeting.appendChild(greetingBottom);
    const heresALook = document.createElement('h2');
    heresALook.innerText = "Here's a look at your";
    greetingBottom.appendChild(heresALook);
    const dayOfWeek = document.createElement('h2');
    dayOfWeek.innerText = days[weekday];
    dayOfWeek.id = 'dayOfWeek';
    greetingBottom.appendChild(dayOfWeek);
    const header = document.createElement('div');
    header.className = 'header';
    rightContainer.appendChild(header);
    const today = document.createElement('h2');
    today.innerText = 'Today';
    header.appendChild(today);
    const todaysDate = document.createElement('p');
    todaysDate.id = 'todaysDate';
    todaysDate.innerText = mm + '/' + dd + '/' + yyyy;
    header.appendChild(todaysDate);
    const tasksArea = document.createElement('div');
    tasksArea.className = 'tasksArea';
    rightContainer.appendChild(tasksArea);
    

    //delete all current children
    while (tasksArea.firstChild) {
        tasksArea.removeChild(tasksArea.lastChild);
    }
    for (let i = 0; i < lists.length; i++) {
        //make sure list isn't empty
        if (lists[i].tasks.length !== 0) {
            //find tasks with due date of today
            let dueToday = [];
            for (let j =0; j < lists[i].tasks.length; j++) {
                if (lists[i].tasks[j].dueDate === calendarDate) {
                    dueToday.push(lists[i].tasks[j]);
                }
            }
            if (dueToday.length !== 0) {
                //add list names to display
                const taskCard = document.createElement('div');
                taskCard.className = 'taskCard';
                const listName = document.createElement('h2');
                listName.className = 'listName';
                listName.innerText = lists[i].title;

                taskCard.appendChild(listName);
                tasksArea.appendChild(taskCard);

                //add individual tasks to display
                for (let k = 0; k < dueToday.length; k++) {
                    const taskLabel = document.createElement('div');
                    taskLabel.className = 'task';
                    taskCard.appendChild(taskLabel);

                    const taskContainer = document.createElement('label');
                    taskContainer.className = 'taskContainer';
                    taskLabel.appendChild(taskContainer);

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.name = 'checkbox';
                    checkbox.className = 'strike';
                    taskContainer.appendChild(checkbox);
                    const taskSpan = document.createElement('span');
                    taskSpan.innerText = dueToday[k].taskName;
                    taskContainer.appendChild(taskSpan);
                    const checkmark = document.createElement('span');
                    checkmark.className = 'checkmark';
                    taskContainer.appendChild(checkmark);

                    const iconContainer = document.createElement('div');
                    iconContainer.className = 'iconContainer';
                    const infoIcon = document.createElement('i');
                    infoIcon.className = 'bx bx-info-circle';
                    const deleteIcon = document.createElement('i');
                    deleteIcon.className = 'bx bx-trash';
                    iconContainer.appendChild(infoIcon);
                    iconContainer.appendChild(deleteIcon);
                    taskLabel.appendChild(iconContainer);

                    //check if task is checked/completed
                    if (dueToday[k].completed === 'true') {
                        checkbox.checked = true;
                    }
                    if (dueToday[k].completed === 'false') {
                        checkbox.checked = false;
                    }
                    taskLabel.addEventListener('input', ()=> {
                        if (dueToday[k].completed === 'true') {
                            dueToday[k].completed = 'false';
                        }
                        else if (dueToday[k].completed === 'false') {
                            dueToday[k].completed = 'true';
                        }
                    })

                    //Add event listener to icons
                    iconsClicked(dueToday[k]);
                }
            }
        }
    }
}

//edit tasks popup
const editTask = document.getElementById('editTask');
const editTaskAdd = document.querySelector('.editTaskAdd');
const editTaskCancel = document.querySelector('.editTaskCancel');
const editDueDate = document.getElementById('editDueDate');
const editTaskName = document.getElementById('editTaskName');
const editOptionMenu = document.querySelector(".edit-select-menu");
const editSelectBtn = editOptionMenu.querySelector(".edit-select-btn");
const edit_sBtn_text = editOptionMenu.querySelector(".edit-sBtn-text");


//check for click on info or delete icons
function iconsClicked(currentTask) {
    const infoIcon = document.querySelectorAll('.iconContainer');
    //only add to the last iconContainer in the DOM (newest one)
    let i = infoIcon.length - 1;
    infoIcon[i].addEventListener('click', (e)=> {
        if (e.target.classList[1] === 'bx-info-circle') {
            //display info pop up
            editTask.style.display = 'flex';
            dim.style.display = 'block';
            editTaskName.value = currentTask.taskName;
            editDueDate.value = currentTask.dueDate;
            edit_sBtn_text.innerText = currentTask.list;
            addListDropdownEdit();
            editSelectBtn.addEventListener("click", () => editOptionMenu.classList.toggle("active"));
            dropDownHelperEdit();    
            editTaskCancel.addEventListener('click', hideEditTask);
            //update task
            editTaskAdd.addEventListener('click', ()=> {
                currentTask.taskName = editTaskName.value;
                currentTask.dueDate = editDueDate.value;
                if (currentTask.list !== edit_sBtn_text.innerText) {
                    //remove task from current list
                    deleteTask(currentTask);
                    //add to new list
                    currentTask.list = edit_sBtn_text.innerText;
                    createTask(currentTask.taskName, currentTask.list, currentTask.dueDate);
                }
                updateDisplay();
                hideEditTask();
            })
        }
        if (e.target.classList[1] === 'bx-trash') {
            //delete the task
            deleteTask(currentTask);
            //update display to reflect deletion
            updateDisplay();
        }
    })
}

function deleteTask(currentTask) {
    for (let i = 0; i < lists.length; i++) {
        if (lists[i].title === currentTask.list) {
            let index = lists[i].tasks.indexOf(currentTask);
            lists[i].tasks.splice(index, 1);

            //update task count
            for (let j = 0; j < listBtns.children.length; j++) {
                if (listBtns.children[j].children[0].innerText === currentTask.list) {
                    listBtns.children[j].children[1].innerText = lists[i].tasks.length;
                }
            }
        }
    }
}

function hideEditTask() {
    editTask.style.display = 'none';
    dim.style.display = 'none';
}

//add list to dropdown menu option on new task popup
function addListDropdownEdit() {
    const editOptionsList = document.querySelector('.edit-options');
    while (editOptionsList.firstChild){
        editOptionsList.removeChild(editOptionsList.firstChild);
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
        editOptionsList.appendChild(liOption);
        liOption.appendChild(dot);
        liOption.appendChild(optionText);
    }
}

function dropDownHelperEdit() {
    let options = editOptionMenu.querySelectorAll(".option");
    options.forEach(option =>{
        option.addEventListener("click", ()=>{
            let selectedOption = option.querySelector(".option-text").innerText;
            edit_sBtn_text.innerText = selectedOption;
    
            editOptionMenu.classList.remove("active");
        });
    });
}

function updateDisplay() {
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
}

//Display homepage if clicked again
todayBtn.addEventListener('click', displayHomeTaskArea);

//Display all tasks
allTasksBtn.addEventListener('click', displayAllTasks);

//Display list view
listBtns.addEventListener('click', function(e) {
    displayListView(e.target);
});

export {displayHomeTaskArea, allTasksBtn, todayBtn, rightContainer, listBtns, iconsClicked, updateDisplay, addListDropdownEdit };