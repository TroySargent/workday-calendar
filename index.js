//render page and pull from local memory
function renderPage() {

};

// when save is clicked, add to local memory for that hour
var hourTask = [];

$(".saveBtn").on("click", function saveHourText() {
    let currentHourValue = this.id;
    let currentText = $(".textarea").eq(currentHourValue).val();
    console.log(currentText);
    hourTask.push({currentHourValue, currentText});
    localStorage.setItem("hourTask", JSON.stringify(hourTask));
});


//add current date to header
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// format color of text area conditionally based on if hour is past, present, or future

$( ".textarea" ).each(function(index, value ) {
    let textHour = $(value).attr("value");
    let currentHour =  moment().hour();
    if (textHour < currentHour) {
        $(this).addClass("past");
    } else if (textHour == currentHour) {
        $(this).addClass("present");
    } else if (textHour > currentHour) {
        $(this).addClass("future");
    };
});
