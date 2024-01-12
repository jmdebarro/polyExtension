// Add check to see if on correct website
// function getHTML() {
//   chrome.runtime.onMessage.addListener(function (message) {
//     console.log("Inside service-worker")
//     if (message.type === "html") {
//       // Creates dummy div to store html
//       return message.content;
//     }
//   });
// }

// Add js button to send message here, which sends message to content, then sends content.js response back to popup.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === 'getHTMLInfo') {
    var page_html;
    // Get information about the current tab
    console.log("Received test req and about to send content req");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log(tabs);
      // tabs[0] represents the currently active tab in the current window
      chrome.tabs.sendMessage(tabs[0].id, { type: 'reqHTML' }, function(response) {
        
        handleResponse();

        function handleResponse() {
          console.log("Inside handle resposne function");
          page_html = response;
          if (page_html != undefined) {
            sendResponse(page_html);
          }
        }

      });
    });
    // console.log("Page_html var: ", page_html);
    // if (page_html !== undefined) {
    //     sendResponse(page_html);
    // }
    console.log("Returning from service worker")
    // Return true to indicate that sendResponse will be called asynchronously
    return true;
  }
});
