var csv = 'data:text/csv;charset=utf-8,' + Array.from(new Set(document.body.innerHTML.toString().match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi))).join('\n');
var data = encodeURI(csv);
var link = document.createElement('a');
link.setAttribute('href', data);
link.setAttribute('download', 'emails.csv');
link.click();
