document.getElementById("bottom-more-vitals").click();
sleep(400);
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
try {
  if (document.querySelector('[ng-bind="project.orgName"]')) {
  chrome.storage.local.set({
    org: document.querySelector('[ng-bind="project.orgName"]').innerText
  });
  chrome.runtime.sendMessage({
    from: 'content',
    subject: 'got that org for ya',
    message: document.querySelector('[ng-bind="project.orgName"]').innerText
  });
  document.querySelector('button.close').click();
} else {
  console.log("can't see the org name!")
}

}
catch(error) {
  console.error(error);
}
