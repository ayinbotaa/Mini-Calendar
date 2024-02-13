let month = document.querySelector(".month");
const year = document.querySelector(".year");
const date = document.querySelector(".date");
const day = document.querySelector(".day");

let monthEl = new Date().getMonth();
let yearEl = new Date().getFullYear();
let dateEl = new Date().getDate();
let dayEl = new Date().getDay();

if (monthEl === 0) {
  month.textContent = "January";
} else if (monthEl === 1) {
  month.textContent = "Febuary";
} else if (monthEl === 2) {
  month.textContent = "March";
} else if (monthEl === 3) {
  month.textContent = "April";
} else if (monthEl === 4) {
  month.textContent = "May";
} else if (monthEl === 5) {
  month.textContent = "june";
} else if (monthEl === 6) {
  month.textContent = "July";
} else if (monthEl === 7) {
  month.textContent = "August";
} else if (monthEl === 8) {
  month.textContent = "September";
} else if (monthEl === 9) {
  month.textContent = "October";
} else if (monthEl === 10) {
  month.textContent = "November";
} else if (monthEl === 11) {
  month.textContent = "December";
}

year.textContent = yearEl;
date.textContent = dateEl;

if (dayEl === 0) {
  day.textContent = "Sunday";
} else if (dayEl === 1) {
  day.textContent = "Monday";
} else if (dayEl === 2) {
  day.textContent = "Tuesday";
} else if (dayEl === 3) {
  day.textContent = "Wednesday";
} else if (dayEl === 4) {
  day.textContent = "Thursday";
} else if (dayEl === 5) {
  day.textContent = "Friday";
} else if (dayEl === 6) {
  day.textContent = "Saturday";
}
