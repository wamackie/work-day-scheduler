var date = moment().format('dddd MMMM Do');
console.log(date)

var time = moment().format('h A');
console.log(time)

var currentDayEl = document.getElementById('currentDay')

var timeBlockElement = document.querySelector('.hour')

console.log(timeBlockElement.textContent)



for (i = 0; i < 9; i++) {
    var containerEl = document.querySelector('.container')
    console.log(containerEl.childNodes[i].childNodes[0])
}

currentDayEl.textContent = date
