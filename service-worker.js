// Add check to see if on correct website
function getHTML() {
  chrome.runtime.onMessage.addListener(function (message) {
    console.log("Inside service-worker")
    if (message.type === "html") {
      // Creates dummy div to store html
      return message.content;
    }
  });
}

var page_html;
// background.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === 'html') {
        // Get information about the current tab
        page_html = message.content;
        }
    return true;
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === 'getHTMLInfo') {
        // Get information about the current tab
        if (typeof(page_html) != undefined) {
            sendResponse(page_html);
        }
        // Return true to indicate that sendResponse will be called asynchronously
        return true;
    }
});