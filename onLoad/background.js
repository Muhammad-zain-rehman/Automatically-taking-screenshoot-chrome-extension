// on install following code will work 

chrome.runtime.onInstalled.addListener((reason) => {
    console.log("kjhbjhvv")
    chrome.tabs.create({
            url: "/ThankYou/thankyouPage.html"
    });
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.tabs.captureVisibleTab(
            null,
            {},
            function(dataUrl)
            {
                sendResponse({imgSrc:dataUrl});
            }
        );
        return true;
})



   



// on install following code will work
