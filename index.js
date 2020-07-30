let hourTaskList = [];

//render page and pull from local memory
function renderPage() {
    hourTaskList = JSON.parse(localStorage.getItem("hourTaskList"));

    if (hourTaskList == null) {
        hourTaskList = [];
    };

    //load each task into time blocks
    for (var i = 0; i < hourTaskList.length; i++) {
        let hourValue = parseInt(hourTaskList[i].currentHourValue);
        let task = hourTaskList[i].currentText;
        $(".textarea").eq(hourValue).val(task);
    };
};

// when save is clicked, add to local memory for that hour
$(".saveBtn").on("click", function saveHourText() {
    let currentHourValue = this.id;
    let currentText = $(".textarea").eq(currentHourValue).val();
    console.log(currentText);
    hourTaskList.push({
        currentHourValue,
        currentText
    });
    localStorage.setItem("hourTaskList", JSON.stringify(hourTaskList));
});


//add current date to header
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// format color of text area conditionally based on if hour is past, present, or future

$(".textarea").each(function (index, value) {
    let textHour = $(value).attr("value");
    let currentHour = moment().hour();
    if (textHour < currentHour) {
        $(this).addClass("past");
    } else if (textHour == currentHour) {
        $(this).addClass("present");
    } else if (textHour > currentHour) {
        $(this).addClass("future");
    };
});

renderPage();