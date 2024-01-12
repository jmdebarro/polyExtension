// Function to creates divs for each professor
function profList(html) {
  var professors = html.getElementsByClassName(
    "cx-MuiTypography-root css-1xnpogb d-flex align-items-center pb-1 pr-1 cx-MuiTypography-body1"
  );
  return professors;
}

// Gets list of all professors
// Key: lastname, value: [rating, id]
async function fetchProfDict() {
  var profDict = {};
  const response = fetch("https://api-prod.polyratings.org/professors.all")
    .then((response) => response.json())
    .then((data) => {
      const profList = data["result"]["data"];
      for (let i = 0; i < profList.length; i++) {
        profDict[profList[i]["lastName"]] = [
          profList[i]["overallRating"],
          profList[i]["id"],
        ];
      }
    });
  return profDict;
}

// Creates div blocks for each professor
function createDivs(profNameList, profDict) {
  // Retrieves id and rating for professor
  var id = profDict[profNameList[1]][1];
  var rating = profDict[profNameList[1]][0];

  // create elements to append
  var newDiv = document.createElement("div");
  var name = document.createElement("HEADER");
  name.innerText = profNameList[0] + " " + profNameList[1]; // Name
  var profInfo = document.createElement("div");
  profInfo.innerHTML =
    "<div> " +
    rating +
    '<br><a href="https://polyratings.dev/professor/' +
    id +
    '">Reviews</a></div>'; // ID and website
  // Append html elements to div
  newDiv.appendChild(name);
  newDiv.appendChild(profInfo);
  return newDiv;
}


function main() {
  // Window object of background page
  var backgroundPage = chrome.extension.getBackgroundPage();
  console.log(typeof(backgroundPage));
  // Create Arr of professors
  var profArr = Array.from(profList(tempContent));
  if (profArr.length == 0) {
    // Create statement saying no professors
    return 0;
  } else {
    const profDict = fetchProfDict();
    // create div per prof and append to html
    for (var i = 0; i < profArr.length; i++) {
      // retrieves name as list
      var profNameList = profArr[i].split(" ");
      var newDiv = createDivs(profNameList, profDict);
      document.body.appendChild(newDiv);
    }
    return 0;
  }
};


function testing() {
    // Send a message to the background script
    console.log("sending test request");
    chrome.runtime.sendMessage({ type: 'getHTMLInfo' }, function (response) {
      var parser = new DOMParser();
      var tempHTML = parser.parseFromString(response, "text/html");
      // console.log(tempHTML);
      console.log(tempHTML);
    });
}

document.getElementById("buttonClick").addEventListener("click", loadProfs);

function loadProfs() {
  testing();
  return true;
}


