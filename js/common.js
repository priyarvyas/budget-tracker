var data = [
    { "id": "1", "name": "Walmart Kitchener", "loc": "Kitchener", "type": "Debit", "value": 30, "month": 1 },
    { "id": "2", "name": "Freshco", "loc": "Cambridge", "type": "Debit", "value": 30, "month": 2 },
    { "id": "3", "name": "Water bill", "loc": "Kitchener", "type": "Debit", "value": 30, "month": 4 },
    { "id": "4", "name": "Salary", "loc": "Toronto", "type": "Credit", "value": 1300, "month": 1 },
    { "id": "5", "name": "No frills", "loc": "Waterloo", "type": "Debit", "value": 30, "month": 1 },
    { "id": "6", "name": "Salary", "loc": "Toronto", "type": "Credit", "value": 1300, "month": 2 },
    { "id": "7", "name": "Tax Return", "loc": "Toronto", "type": "Credit", "value": 300, "month": 7 }
];

var months = ["January", "Februray", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
