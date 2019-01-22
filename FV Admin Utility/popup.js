/*ddsddsa
TODO:
1. getOrg: textarea = org, set local, default to FV clients and leads - DONE
    ----default org in options?!?!
2. saveOrg change, sets saveOrg = TRUE/FALSE, DONE
3. IF saveOrg = False on page load,
    hide org-choose
    add auto-complete combo-box filled with org-chooser options
    click on hidden option based on text area.
4. IF saveOrg = True on page load.
    click option set in extension
*/
'use strict';
//default set in case I want to set this in options.html sometime
var defaultOrg = "Filevine Clients & Leads";
chrome.runtime.onMessage.addListener(function(msg, sender, response) {
  // First, validate the message's structure
  if ((msg.from === 'content') && (msg.subject === 'got that org for ya')) {
    document.getElementById('currentOrg').value = msg.message;
    response("nice job");
  }
});
document.addEventListener('DOMContentLoaded', function() {
  //sets checkbox and textbox to saved value on load.
  chrome.storage.local.get(['toggle', 'org'], function(data) {
    //document.getElementById('saveOrg').checked = data.toggle;
    if (data.org.length === 0) {
      document.getElementById('currentOrg').value = defaultOrg;
      chrome.storage.local.set({
        org: defaultOrg
      });
    } else {
      document.getElementById('currentOrg').value = data.org;
    }
  });
  //button listeners
  document.getElementById('gotoFields').addEventListener('click', runScript);
  document.getElementById('exportEmails').addEventListener('click', runScript);
  document.getElementById('getOrg').addEventListener('click', runScript);
  //document.getElementById('saveOrg').addEventListener('change', FsaveOrg);
  document.getElementById('currentOrg').addEventListener('change', FcurrentOrg);
});


function runScript(e) {
  chrome.tabs.query({
      active: true,
      currentWindow: true
    },
    function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        file: e.target.id + '.js'
      });
    }
  );
}

/* Saves checkbox value to storage
function FsaveOrg() {
  chrome.storage.local.set({
    toggle: document.getElementById('saveOrg').checked
  });
}
*/

//Saves textbox value to storage
function FcurrentOrg() {
  chrome.storage.local.set({
    org: document.getElementById('currentOrg').value
  });
  chrome.runtime.sendMessage({
    from: 'popup.js',
    subject: 'currentOrg',
    message: document.getElementById('currentOrg').value
  });
}
