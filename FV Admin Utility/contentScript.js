var observer = new MutationObserver(onMutation);
observer.observe(document, {
  childList: true,
  subtree: true,
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

    var added = mutations[0].addedNodes[0];
    if (!added || (added.localName !== 'button' && !added.children.length)) {
     return;
    }
  }

  for (var i = 0, len = buttons.length; i < len; i++) {
    var button = buttons[i];
    if (!button.textContent.match(/Choose an Org/)) {
      continue;
    }
    var walker = document.createTreeWalker(button, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      var buttonNode = walker.currentNode;
      var text = buttonNode.nodeValue;
      if (text.match(/Choose an Org/) && gettingElementByText(currentOrg)) {
        document.getElementById("org-chooser").click();
        gettingElementByText(currentOrg).click();

      }
    }
  }
}
