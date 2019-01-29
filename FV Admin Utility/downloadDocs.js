function delay() {
  return new Promise(resolve => setTimeout(resolve, timer));
}

async function delayedLog(node) {
  await delay();
  console.log(node);
  node.click();
}

async function processArray(list) {
  if (timer === null) {
    alert("Suit yourself. I didn't want to download anything for you anyway.");
  } else {
    if (window.location.href.indexOf("docs") == -1 || window.location.href.indexOf("app.filevine.c") == -1) {
      alert("This tool only works on the Filevine Docs page!")
      return;
    }
    for (const node of list) {
      await delayedLog(node);
    }
    console.log('Done!');
  }
}

var timer = prompt("Please select a delay time between downloads, in milliseconds.\n\n500ms should be sufficient, but you may need to use a longer delay depending on the speed of your internet connection and the current server load on Filevine servers.", 500);
var nodelist = document.querySelectorAll('i.fa-download.fa-lg');

processArray(nodelist);
