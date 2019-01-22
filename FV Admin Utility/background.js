chrome.runtime.onInstalled.addListener(
  function() {
    chrome.storage.local.set({
        toggle: false,
        org: "Filevine Clients & Leads"
      },
      function() {
        console.log('Save org is false.');
      }
    );
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
            hostContains: 'app.filevine.c'
          },
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
