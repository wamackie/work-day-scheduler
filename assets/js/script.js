var date = moment().format('dddd MMMM Do');

var time = moment().format('HH');

var currentDayEl = document.getElementById('currentDay')

var descriptionEl = document.querySelectorAll('.description')

var dataTimeTypeEl = document.getElementsByClassName('hour')

// check time and color blocks based on past, present, and future
checkTime();
function checkTime() {
    for (i = 0; i < 9; i++) {
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

$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
      // get nearby values
      var value = $(this).siblings('.description').val();
      var parent = $(this).parent().attr('id');
  
      // save in localStorage
      localStorage.setItem(parent, value);
    });
    
      // load saved data from localStorage
      $('#hour-9 .description').val(localStorage.getItem('hour-9'));
      $('#hour-10 .description').val(localStorage.getItem('hour-10'));
      $('#hour-11 .description').val(localStorage.getItem('hour-11'));
      $('#hour-12 .description').val(localStorage.getItem('hour-12'));
      $('#hour-13 .description').val(localStorage.getItem('hour-13'));
      $('#hour-14 .description').val(localStorage.getItem('hour-14'));
      $('#hour-15 .description').val(localStorage.getItem('hour-15'));
      $('#hour-16 .description').val(localStorage.getItem('hour-16'));
      $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    });

currentDayEl.textContent = date