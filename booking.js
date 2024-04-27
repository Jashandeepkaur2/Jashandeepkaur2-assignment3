/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

document.addEventListener('DOMContentLoaded'), function() { 
    var costPerDay = 30;
    var dayselected = [];
    var fullDayButton = document.getElementById('full');
    var halfdayButton = document.getElementById('half');
    var clearbutton = document.getElementById('clear-button');
    var calculatedcost = document.getElementById('calculated-cost');
    var dayButtons = document.getElementById('day-buttons');
}


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayButtons.addEventListener('click', function(){
    daySelected.forEach(function(day) {
       var button = document.getElementById(day);
       button.classlist.remove('clicked');
    });
    daySelected = [];
    recalculateTotalCost();
})



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButtons.addEventListener('click', function(){
    daySelected.forEach(function(day){
        var button = document.getElementById(day);
        button.classlist.remove('clicked');
    });
    datSelected = [];
    recalculateTotalCost();
    });


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener('click', function(){
    costPerDay = 20;
    halfDayButton.classlist.add('clicked');
    fullDaybutton.classlist.remove('clicked');
    recalculateTotalCost();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener('click', function(){
    costPerDay = 35;
    fullDayButton.classlist.add('clicked');
    halfDayButton.classlist.remove('clicked');
    recalculateTotalCost();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculateTotalCost() {
     totalcost = costPerDay * daySelected.lenght;
    calculatedCost.textContent = totalCost;
}

