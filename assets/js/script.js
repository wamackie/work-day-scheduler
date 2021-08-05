var date = moment().format('dddd MMMM Do');
console.log('date', date)

var time = moment().format('h A');
console.log('time', time)

var currentDayEl = document.getElementById('currentDay')

var allTimeBlockEl = document.querySelectorAll('.hour')

console.log('allTimeBlockEl', allTimeBlockEl)

 var descriptionEl = document.querySelectorAll('.description')

 checkTime();
function checkTime() {
    for (i = 0; i < 9; i++) {
        console.log('allTimeBlockEl[i].textContent', allTimeBlockEl[i].textContent);
        console.log('descriptionEl[i]', descriptionEl[i]);
        if (allTimeBlockEl[i].textContent > time) {
            descriptionEl[i].classList.add('past');
        } else if (allTimeBlockEl[i].textContent < time) {
            descriptionEl[i].classList.add('future');
        } else {
            descriptionEl[i].classList.add('present');
        }
    }
}


//  $("#.saveBtn").click(function() {
//      checkTime()
//  })

currentDayEl.textContent = date