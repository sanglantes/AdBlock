let color = "#ff0000";

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color});
    //console.log("Color is set to", `color: ${color}`);
});
