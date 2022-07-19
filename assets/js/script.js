//Displays current date and time
function displayTime(){
    var currenttime = moment().format('MMM Do, YYYY, HH:mm:ss a');
$("#currentDay").html(currenttime);
    setTimeout(displayTime, 1000);
}

$(document).ready(function() {
    displayTime();
    var currenthour = moment().format("HH");

    // Clears local storage and schedule items
    $("#clearbttn").click(function (event) {
        event.preventDefault;
        $("textarea").val("");
        localStorage.clear();
      });
    
    $(".timeslot").each(function () {
        var hour = $(this).attr("id");
        console.log(hour);

        if (currenthour == hour) {
          $(this).addClass("present");
        } else if (currenthour < hour) {
          $(this).removeClass("present");
          $(this).addClass("future");
        } else if (currenthour > hour) {
          $(this).removeClass("future");
          $(this).addClass("past");
        }
      });

    $(".savebttn").click(function (event) {
      event.preventDefault();     
      var time = $(this).parent().attr("id");
      var value = $(this).siblings(".item").val();
      localStorage.setItem(time, value);
    });
    
    //Gets and displays local storage data
    $("#09 .item").val(localStorage.getItem("09"));
    $("#10 .item").val(localStorage.getItem("10"));
    $("#11 .item").val(localStorage.getItem("11"));
    $("#12 .item").val(localStorage.getItem("12"));
    $("#13 .item").val(localStorage.getItem("13"));
    $("#14 .item").val(localStorage.getItem("14"));
    $("#15 .item").val(localStorage.getItem("15"));
    $("#16 .item").val(localStorage.getItem("16"));
    $("#17 .item").val(localStorage.getItem("17"));
});



    