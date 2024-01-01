// Function to creates divs for each professor
function profList(html) {
    var professors = html.getElementsByClassName("cx-MuiTypography-root css-1xnpogb d-flex align-items-center pb-1 pr-1 cx-MuiTypography-body1")
    return 0
}

// Add check to see if on correct website

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "html") {
      
      // Creates dummy div to store html
      var tempContent = document.createElement("div");
      tempContent.innerHTML = request.content;
      // Create Arr of professors
      var profArr = Array.from(profList(tempContent));
      if (profArr.length == 0) {
        // Create statement saying no professors
        return 0;
    }

   return 0; 
  } else {
    return 0;
  }
});

// Gets polyratings for professors
function getRatings() {
  return 0;
}

// Creates div blocks for each professor
function createDivs() {
  return 0;
}