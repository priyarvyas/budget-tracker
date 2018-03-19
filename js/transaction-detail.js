var id = getUrlParameter('id');
var detailData = _.findWhere(data, { id: id });

if (detailData != null || detailData != undefined) {
    var htmlStr = '<h1>' + detailData.name + '</h1>'
        + '<h2>' + detailData.loc + '</h2>'
        + '<h3>' + months[detailData.month - 1] + '</h3>';
    if (detailData.type == 'Credit') {
        htmlStr = htmlStr + '<p class="type--credit"> $' + detailData.value + '</p>';
    } else {
        htmlStr = htmlStr + '<p class="type--debit"> $' + detailData.value + '</p>';
    }
    document.getElementById('transaction--detail').innerHTML = htmlStr;
}

for (var key in months) {
    var month = months[key];
    var value = parseInt(key) + 1;
    var option = $('<option value="' + value + '"> ' + month + '</option>');
    $('#input--month').append(option);
}