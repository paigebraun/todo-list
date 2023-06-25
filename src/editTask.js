import { lists, dim } from "./globals";
import { displayHomeTaskArea, listBtns } from ".";
import { createTask } from "./newTasks";
import { displayAllTasks } from "./allTasks";
import { displayListView } from "./listView";

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
function iconsClicked(iconContainer, currentTask) {
    iconContainer.addEventListener('click', (e)=> {
        if (e.target.classList[1] === 'bx-info-circle') {
            //display info pop up
            editTask.style.display = 'flex';
            dim.style.display = 'block';
            editTaskName.value = currentTask.taskName;
            editDueDate.value = currentTask.dueDate;
            edit_sBtn_text.innerText = currentTask.list;
            addListDropdownEdit();
            editSelectBtn.addEventListener("click", editSelectHelper);
            dropDownHelperEdit();    
            editTaskAdd.addEventListener('click', editAddHandler);
        }
        if (e.target.classList[1] === 'bx-trash') {
            //delete the task
            deleteTask(currentTask);
            //update display to reflect deletion
            updateDisplay();
        }
    });

    //cancel update to task, reset
    editTaskCancel.addEventListener('click', ()=> {
        editSelectBtn.removeEventListener("click", editSelectHelper);
        editTaskAdd.removeEventListener('click', editAddHandler);
        hideEditTask();
    });
    
    //update task
    function editAddHandler() {
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
        editTaskAdd.removeEventListener('click', editAddHandler);
        editSelectBtn.removeEventListener("click", editSelectHelper);
    }

    function editSelectHelper() {
        editOptionMenu.classList.toggle("active");
    }
}

//delete task and update task count
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

//hide pop up
function hideEditTask() {
    editTask.style.display = 'none';
    dim.style.display = 'none';
}

//add list to dropdown menu option on new task popup
function addListDropdownEdit() {
    edit_sBtn_text.innerText = lists[0].title;
    const editOptionsList = document.querySelector('.edit-options');
    while (editOptionsList.firstChild) {
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

export { iconsClicked, addListDropdownEdit, updateDisplay };