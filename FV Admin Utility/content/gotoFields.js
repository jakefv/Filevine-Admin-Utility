try {
    if (document.querySelectorAll('div.custom-field')[0].getAttribute('ng-if') != null) {
        window.location.replace('https://app.filevine.com/api/admin/customSection/' + document.querySelectorAll('div.custom-field')[0].getAttribute('ng-if').match(/\d+/) + '/mergeFields');
    } else if (document.querySelectorAll('form')[1].querySelectorAll('label')[0] != null) {
        window.location.replace('https://app.filevine.com/api/admin/customSection/' + document.querySelectorAll('form')[1].querySelectorAll('label')[0].outerHTML.toString().match(/(?<=for\=\").*?(?=")/).toString().match(/\d+/) + '/mergeFields');
    } else {
        alert("I don't see any custom fields...");
    }
} catch (error) {
    console.error(error);
    alert("I don't see any custom fields...")
}