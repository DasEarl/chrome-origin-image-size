/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    /* If the received message has the expected format... */
    if (msg.text && (msg.text == "report_back")) {
        /* Call the specified callback, passing
           the web-pages DOM content as argument */
        // sendResponse(document.getElementById("mybutton").innerHTML);
        sendResponse(321);
    }
});
var s = document.getElementsByTagName('img')[0];
s.removeAttribute('height');
s.removeAttribute('width');
s.removeAttribute('style');
s.setAttribute('max-width', '100%');
