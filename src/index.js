import './styles.css';
import { dd, mm, yyyy, calendarDate, hourOfDay, weekday, lists } from './globals';
import { createTask, sBtn_text } from './newTasks';

//display todays info on homepage
let todaysDate = document.getElementById('todaysDate');
todaysDate.innerText = mm + '/' + dd + '/' + yyyy;

let timeOfDay = document.getElementById('timeOfDay');
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

let dayOfWeek = document.getElementById('dayOfWeek');
dayOfWeek.innerText = days[weekday];


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
    const tasksArea = document.querySelector('.tasksArea');
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

export {displayHomeTaskArea};