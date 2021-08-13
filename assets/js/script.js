var date = moment().format('dddd MMMM Do');
console.log('date', date)

var time = moment().format('H');
console.log('time', time)

var currentDayEl = document.getElementById('currentDay')

var allTimeBlockEl = document.querySelectorAll('.hour')

var descriptionEl = document.querySelectorAll('.description')

console.log('allTimeBlockEl', allTimeBlockEl)

 checkTime();
function checkTime() {
    for (i = 0; i < 9; i++) {
        console.log(parseInt(allTimeBlockEl[i].textContent))
        if (allTimeBlockEl[i].textContent > time) {
            descriptionEl[i].classList.add('future');
        } else if (allTimeBlockEl[i].textContent < time) {
            descriptionEl[i].classList.add('past');
        } else {
            descriptionEl[i].classList.add('present');
        }
    }
}

currentDayEl.textContent = date