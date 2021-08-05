var date = moment().format('dddd MMMM Do');
console.log('date', date)

var time = moment().format('h A');
console.log('time', time)

var currentDayEl = document.getElementById('currentDay')

var allTimeBlockEl = document.querySelectorAll('.hour')

console.log('allTimeBlockEl', allTimeBlockEl)

 var descriptionEl = document.querySelector('description')

 checkTime();
 function checkTime() {
    for (i = 0; i < 9; i++) {
    console.log('allTimeBlockEl[i].textContent', allTimeBlockEl[i].textContent);
    
        var colTime = ('allTimeBlockEli[i].textContent')

        if (colTime > time) {
            (descriptionEl).addClass("future");
        }
        else if (colTime < time) {
            (descriptionEl).addClass("past");
        }
        else {
            (descriptionEl).addClass("present");
        }
    }
}

$(#saveBtn).click(function() {
    checkTime()
})

currentDayEl.textContent = date