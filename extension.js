// Function to creates divs for each professor
function createDivs() {
    var professors = document.getElementsByClassName("cx-MuiTypography-root css-1xnpogb d-flex align-items-center pb-1 pr-1 cx-MuiTypography-body1")
    return 0
}

chrome.runtime.onMessage.addListener(function(request) {
    if (request.type === "html") {
      var htmlContent = request.content;
      // Do something with the HTML content
    }
  });