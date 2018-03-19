var selectMonth = document.getElementById("month--select");

$(document).ready(function () {
    var option = $('<option value=0>All</option>');
    $(selectMonth).append(option);
    for (var key in months) {
        var month = months[key];
        var value = parseInt(key) + 1;
        var option = $('<option value="' + value + '"> ' + month + '</option>');
        $(selectMonth).append(option);
    }

    $(selectMonth).change(function (e) {
        var month = parseInt($(this).val());
        document.getElementById("dashboard--transaction--list").innerHTML = "";
        if (month > 0) {
            var filterMonth = _.where(data, { month: month });
            createTransactionList(filterMonth);
        } else {
            createTransactionList(data);
        }
    });

    $('#transaction--type').change(function (e) {
        var type = $(this).val();
        document.getElementById("dashboard--transaction--list").innerHTML = "";
        if (type=='Credit' || type=='Debit') {
            var filterType = _.where(data, { type: type });
            createTransactionList(filterType);
        } else {
            createTransactionList(data);
        }
    });

    $('#location--input').keyup(function (e) {
        var loc = $(this).val().toLowerCase().split(' ').join('');
        var filterLoc = _.filter(data, function (item) {
            var toCompare = item.loc.toLowerCase();
            return toCompare.indexOf(loc) != -1;
        });
        document.getElementById("dashboard--transaction--list").innerHTML = "";
        createTransactionList(filterLoc);
    });
    
});



