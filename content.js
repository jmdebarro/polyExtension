// Get HTML and send it to extension script
// Read the HTML content of the current page
var page_html = document.documentElement.outerHTML;
chrome.runtime.sendMessage({type: "html", content: page_html});