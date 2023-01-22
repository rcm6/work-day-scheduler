//Display the current day at the top of the calendar when a user opens the planner.

// function that displays the current day using moment
function displayTime() {
    var currentDate = moment().format("dddd, Do MMMM");
    $("#currentDay").text(currentDate);
  }
  setInterval(displayTime, 1000);


//Present timeblocks for standard business hours when the user scrolls down.

//Color-code each timeblock based on past, present, and future when the timeblock is viewed.
function colourCode() {
    let currentHour = moment().format("HH");
    
            // loop time blocks
            $(".time-block").each(function () {
              var blockHour = parseInt($(this).attr("id"));
              console.log("c: " + currentHour)
              console.log("b: " + blockHour)
    
              //check against current time
              if (blockHour < currentHour) {
                  $(this).addClass("past");
                  $(this).removeClass("future");
                  $(this).removeClass("present");
              }
              else if (blockHour === currentHour) {
                  $(this).removeClass("past");
                  $(this).addClass("present");
                  $(this).removeClass("future");
              }
              else {
                  $(this).removeClass("present");
                  $(this).removeClass("past");
                  $(this).addClass("future");
              }
          })
      }
      colourCode();
//Allow a user to enter an event when they click a timeblock.

//Save the event in local storage when the save button is clicked in that timeblock.

//Persist events between refreshes of a page.