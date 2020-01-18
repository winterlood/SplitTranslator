chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
      file: '/script/getPage.js'
    });
  });
  
