chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
    //   return {redirectUrl: "http://google.com"};
      return {redirectUrl: chrome.extension.getURL("index.html")}; 
    },
    {urls:  //add here the list of URLs that you want to block
      ["https://www.facebook.com/*"]
    },
    ["blocking"]
  );