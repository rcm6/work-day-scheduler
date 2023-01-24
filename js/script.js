//Display the current day at the top of the calendar when a user opens the planner.

// function that displays the current day using moment
function displayTime() {
    var currentDate = moment().format("dddd, Do MMMM");
    $("#currentDay").text(currentDate);
  }
  setInterval(displayTime, 1000);
  
  //Present timeblocks for standard business hours when the user scrolls down.
  //Persist events between refreshes of a page.
  
  //check if local storage exists
  if (localStorage.getItem("storedBlocks") === null) {
    // if null initialise local storage to below timeblocks
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
  
    //set local storage
    localStorage.setItem("storedBlocks", JSON.stringify(timeBlocks));
  }
  
  //generate timeblocks from local storage
  
  //create variable to hold local storage array
  var retreivedBlocks = JSON.parse(window.localStorage.getItem("storedBlocks"));
  
  for (i = 0; i < retreivedBlocks.length; i++) {
    var displayHour = moment().hours(retreivedBlocks[i].hour).format("h a");
    var currentHour = moment().format("HH");
    var blockHour = retreivedBlocks[i].hour;
    var textDescription = retreivedBlocks[i].description;
  
    //Color-code each timeblock based on past, present, and future when the timeblock is viewed.
    if (blockHour < currentHour) {
      classTime = "past";
    } else if (blockHour == currentHour) {
      classTime = "present";
    } else {
      classTime = "future";
    }
  
    //append timeblock to container
    $(".container").append(
      `<div id="${blockHour}" class="col-md-12 time-block row ${classTime}">
          <div id="hour" class="col-md-2 hour">${displayHour}</div>
          <textarea id="description${blockHour}" class="col-md-9 description">${textDescription}</textarea>
          <button class="col-md-1 saveBtn" onclick = "saveTime(${blockHour})">
          <span class="fas fa-save"></span>
          </button>
          </div>`
    );
  }
  
  function saveTime(arr) {
    var saveHour = arr;
    var blockIndex = saveHour - 9;
  
    //get description from calendar textarea
    var newDescription = $("#description" + saveHour).val();
  
    //update array
    retreivedBlocks[blockIndex].description = newDescription;
    //update local storage
    localStorage.setItem("storedBlocks", JSON.stringify(retreivedBlocks));
  };