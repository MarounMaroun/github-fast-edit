
chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
        var url = tab.url
        if (url !== undefined && changeInfo.status == "complete") {
            chrome.tabs.sendMessage(tabId, {action: "execute"})
        }
    }
);