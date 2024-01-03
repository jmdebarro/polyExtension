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

// Gets list of all professors
// Key: lastname, value: [rating, id]
var profDict = {};
const response = fetch("https://api-prod.polyratings.org/professors.all")
                            .then(response => response.json())
                            .then(data => 
                              { const profList = data["result"]["data"];
                                for (let i=0; i<profList.length; i++) {
                                  profDict[profList[i]["lastName"]] = [profList[i]["overallRating"], profList[i]["id"]]
                            }});
                        
          

// Creates div blocks for each professor
function createDivs() {
  return 0;
}