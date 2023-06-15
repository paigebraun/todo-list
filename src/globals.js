//get todays date, time of day, and weekday
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
let calendarDate = yyyy + '-' + mm + '-' + dd;
let hourOfDay = today.getHours();
let weekday = today.getDay();

//store lists
let lists = [];
const dim = document.querySelector('.dim');

export {today, dd, mm, yyyy, calendarDate, hourOfDay, weekday, lists, dim };