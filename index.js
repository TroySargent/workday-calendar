//render page and pull from local memory
function renderPage() {

};
// when clicked save, add to local memory for that hour




//add current date to header
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// format color of text area conditionally based on if hour is past, present, or future
let hourArray = $(".textarea");

function colorCodeHours() {
    for (let i = 0; hourArray.length; i++) {
        let currentTextId = parseInt(hourArray[i].id);
        let currentHour = moment().hour();

        if (currentTextId < currentHour) {
            hourArray.eq(i).addClass("past");
        } else if (currentTextId == currentHour) {
            hourArray.eq(i).addClass("present");
        } else if (currentTextId > currentHour) {
            hourArray.eq(i).addClass("future");
        }
    };
};

colorCodeHours();
