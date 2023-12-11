/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the 
//      screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 35;
var costPerHalfDay = 15;
var numberDaysSelected = 0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and 
//      update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. 
//  hint: .classList.contains() might be helpful here!

var dayButtons = document.querySelectorAll('.day-selector li');

dayButtons.forEach(function(day) {
  day.addEventListener('click', function pickDay() {
    if (!day.classList.contains('clicked')) {
      day.classList.add('clicked');
      numberDaysSelected += 1;
    }
  });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other 
//  relevant variables are reset, and the calculated cost is set to 0.

var clearButton = document.getElementById("clear-button");
var cost = document.getElementById("calculated-cost");

clearButton.addEventListener('click', function() {
  dayButtons.forEach(function clearDays(day) {
    if (day.classList.contains('clicked')) {
      day.classList.remove('clicked');
    }
  });
  numberDaysSelected = 0;
  cost.innerHTML = 0;
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to 
//      the "half" element, remove it from the "full" element, and recalculate the total cost.

var halfDay = document.getElementById('half');

halfDay.addEventListener('click', function() {
  halfDay.classList.add('clicked');
  fullDay.classList.remove('clicked');
  var dailyRate = costPerHalfDay;
  cost.innerHTML = numberDaysSelected * dailyRate;
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is 
//      added to "full" and removed from "half", and the total cost is recalculated.

var fullDay = document.getElementById('full');

fullDay.addEventListener('click', function() {
  fullDay.classList.add('clicked');
  halfDay.classList.remove('clicked');
  var dailyRate = costPerDay;
  cost.innerHTML = numberDaysSelected * dailyRate;
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the 
//  appropriate value

// calculated within functions
