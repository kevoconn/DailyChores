$(function () {
  let buttons = $(".saveBtn");

  buttons.on("click", function (event) {
    let parent = $(this).parent().attr("id");
    let description = $(this).siblings(".description").val();
    console.log(parent, description);
    localStorage.setItem(parent, description);
  });

  let date = dayjs();
  $("#currentDay").text(date.format("MMM D, YYYY"));

  $(".time-block").each(function () {
    let hour = parseInt($(this).attr("id").split("-")[1]);

    if (hour < dayjs().hour()) {
      $(this).addClass("past");
    } else if (hour === dayjs().hour()) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
    console.log();
  });
});

$("#hour-9").children(".description").val(localStorage.getItem("hour-9"));
$("#hour-10").children(".description").val(localStorage.getItem("hour-10"));
$("#hour-11").children(".description").val(localStorage.getItem("hour-11"));
$("#hour-12").children(".description").val(localStorage.getItem("hour-12"));
$("#hour-13").children(".description").val(localStorage.getItem("hour-13"));
$("#hour-14").children(".description").val(localStorage.getItem("hour-14"));
$("#hour-15").children(".description").val(localStorage.getItem("hour-15"));
$("#hour-16").children(".description").val(localStorage.getItem("hour-16"));
$("#hour-17").children(".description").val(localStorage.getItem("hour-17"));

/*GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist*/
