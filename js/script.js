//Display the current day at the top of the calendar when a user opens the planner.

// function that displays the current day using moment
function displayTime() {
    var currentDate = moment().format("dddd, Do MMMM");
    $("#currentDay").text(currentDate);
  }
  setInterval(displayTime, 1000);


//Present timeblocks for standard business hours when the user scrolls down.

//check if local storage is empty

// if empty, set local storage to below tiemblocks
var timeBlocks = [
    {
      hour: 9,
      description: "",
    },
    {
        hour: 10,
        description: "",
    },
    {
        hour: 11,
        description: "",
    },
    {
        hour: 12,
        description: "",
    },
    {
        hour: 13,
        description: "",
    },
    {
        hour: 14,
        description: "",
    },
    {
        hour: 15,
        description: "",
    },
    {
        hour: 16,
        description: "",
    },
    {
        hour: 17,
        description: "",
    },
  ];
  console.log(timeBlocks)

//set local storage
localStorage.setItem("storedBlocks", JSON.stringify(timeBlocks));

//generate empty timeblocks

for ( i = 0; i < timeBlocks.length; i++) {

    $(".container").append(
        `<div id="${i+9}" class="col-md-12 time-block row">
        <div id="hour" class="col-md-2 hour">${i+9}</div>
        <textarea id="description" class="col-md-9 description"></textarea>
        <button class="col-md-1 saveBtn">
                        <span class="fas fa-save"></span>
                    </button>
        </div>`
    );

};

//if not empty, generate timeblocks based on local storage



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



//Persist events between refreshes of a page.