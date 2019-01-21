try {
    if (document.querySelectorAll('div.custom-field')[0].getAttribute('ng-if') != null) {
        window.open('https://app.filevine.com/api/admin/customSection/' + document.querySelectorAll('div.custom-field')[0].getAttribute('ng-if').match(/\d+/) + '/mergeFields', '_blank');
    } else if (document.querySelectorAll('form')[1].querySelectorAll('label')[0] != null) {
        window.open('https://app.filevine.com/api/admin/customSection/' + document.querySelectorAll('form')[1].querySelectorAll('label')[0].outerHTML.toString().match(/(?<=for\=\").*?(?=")/).toString().match(/\d+/) + '/mergeFields', '_blank');
    } else {
        alert("I don't see any custom fields...");
    }
} catch (error) {
    alert("I don't see any custom fields...")
}