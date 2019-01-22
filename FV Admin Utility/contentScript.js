var observer = new MutationObserver(onMutation);
observer.observe(document, {
  childList: true, // report added/removed nodes
  subtree: true, // observe any descendant elements
});

function gettingElementByText(searchText) {
  var aTags = document.getElementsByTagName("a");
  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent == searchText) {
      return aTags[i];
    }
  }
}
var currentOrg = "";
function getCurrentOrg() {
    chrome.storage.local.get('org', function (result) {
        currentOrg = result.org;
    });
}
var buttons = document.getElementsByTagName('button');
//Finds Org Chooser and selects the org indicated in popup.html
function onMutation(mutations) {
  getCurrentOrg()
  if (!window.location.href.match(/\/#\/advanced\//)) {
    return;
  }

  if (currentOrg === undefined || currentOrg.length < 1) {
    return;
  }

  if (mutations.length == 1) {
    // optimize the most frequent scenario: one element is added/removed
    var added = mutations[0].addedNodes[0];
    if (!added || (added.localName !== 'button' && !added.children.length)) {
      // so nothing was added or non-button with no child elements
      return;
    }
  }
  // button is supposed to be used rarely so there'll be just a few elements
  for (var i = 0, len = buttons.length; i < len; i++) {
    var button = buttons[i];
    if (!button.textContent.match(/Choose an Org/)) {
      continue;
    }
    var walker = document.createTreeWalker(button, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      var buttonNode = walker.currentNode;
      var text = buttonNode.nodeValue;
      if (text.match(/Choose an Org/)) {
        document.getElementById("org-chooser").click();
        try{
          gettingElementByText(currentOrg).click();
        }
        catch(error) {
        }
      }
    }
  }
}
