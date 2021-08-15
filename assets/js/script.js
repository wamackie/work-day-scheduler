var date = moment().format('dddd MMMM Do');
console.log('date', date)

var time = moment().format('HH');
console.log('time', time)

var currentDayEl = document.getElementById('currentDay')

var allTimeBlockEl = document.querySelectorAll('.hour')

var descriptionEl = document.querySelectorAll('.description')

var dataTimeTypeEl = document.getElementsByClassName('hour')

var buttons = document.querySelectorAll('.saveBtn')

console.log('dataTimeTypeEl', dataTimeTypeEl)

checkTime();
function checkTime() {
    for (i = 0; i < 9; i++) {
        //console.log('allTimeBlockEl[i].textContent', allTimeBlockEl[i].textContent);
        console.log('descriptionEl[i]', descriptionEl[i]);
        console.log('dataTimeTypeEl[i]', dataTimeTypeEl[i]);
        dataTimeTypeEl[i].getAttribute("data-time");
        if (dataTimeTypeEl[i].dataset.time > parseInt(time)) {
            descriptionEl[i].classList.add('future');
        } else if (dataTimeTypeEl[i].dataset.time < parseInt(time)) {
            descriptionEl[i].classList.add('past');
        } else {
            descriptionEl[i].classList.add('present');
        }
    }
}

//save to local storage
function logData() {
    for (i=0; i < 9; i++){
    console.log('button is working')
    console.log(descriptionEl[i])
    }
}

currentDayEl.textContent = date
console.log(buttons)
console.log(descriptionEl)