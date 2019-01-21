/*
TODO:
1. getOrg: textarea = org
2. saveOrg change, sets saveOrg = TRUE/FALSE,
3. on page load, replace org-choose with crop

*/

'use strict';
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('gotoFields').addEventListener('click', gotoFields);
    document.getElementById('exportEmails').addEventListener('click', exportEmails);
});

function gotoFields() {
    chrome.tabs.query({
            active: true,
            currentWindow: true
        },
        function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id, { file: 'gotoFields.js' });
        }
    );
}
function exportEmails() {
    chrome.tabs.query({
            active: true,
            currentWindow: true
        },
        function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id, { file: 'exportEmails.js' });
        }
    );
}