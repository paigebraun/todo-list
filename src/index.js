import './styles.css';
import { dd, mm, yyyy, calendarDate, hourOfDay, weekday, lists} from './globals';
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
                }
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

export {displayHomeTaskArea, allTasksBtn, todayBtn, rightContainer, listBtns};