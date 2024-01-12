// Get HTML and send it to extension script
// Read the HTML content of the current page
// var page_html = document.documentElement.outerHTML;
// chrome.runtime.sendMessage({type: "html", content: page_html});
function handler(message, sender, sendResponse) {

    if (message.type === "reqHTML") {
        // Get information about the current tab
        var page_html = document.documentElement.outerHTML;
        console.log("Response from content");
        sendResponse(page_html);
    }
    return true;
};
  
chrome.runtime.onMessage.addListener(handler);
