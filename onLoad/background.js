// on install following code will work 

chrome.runtime.onInstalled.addListener((reason) => {
    chrome.tabs.create({
            url: "/ThankYou/thankyouPage.html"
    });
});

// on install following code will work
