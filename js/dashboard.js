
$(document).ready(function () {

    (function ($) {
        var topFourData = _.sortBy(data, 'month').reverse();
        createTransactionList(topFourData);
        
        $('#header__icon').click(function (e) {
            e.preventDefault();
            $('body').toggleClass('with--sidebar');
        });

        $('#site-cache').click(function (e) {
            $('body').removeClass('with--sidebar');
        });

    })(jQuery);

    $('.detail--link').click(function () {
        console.log($(this));
        var id = $(this).attr('data-id');
        window.open('transaction-detail.html?id='+id);   
    });

});

var createTransactionList = function (arrData) {
    for (var key in arrData) {
        var name = arrData[key].name;
        var loc = arrData[key].loc;
        var type = arrData[key].type;
        var month = arrData[key].month;
        var value = arrData[key].value;
        var badge = document.createElement('div');
        badge.className = 'badge';
        var htmlStr =
            '<div>' + name +
            '<small class="location">' + loc + '</small>' + '<small class="location">' + type + '</small>' + '<small class="location">' + months[(month - 1)] + '</small>' + '</div>';
        if (type == 'Credit') {
            htmlStr = htmlStr + '<p class="type--credit"> $' + value + '</p>';
        } else {
            htmlStr = htmlStr + '<p class="type--debit"> $' + value + '</p>';
        }
        htmlStr = htmlStr + '<a class="detail--link" data-id="' + arrData[key].id +'">details</a>';
        badge.innerHTML = htmlStr;
        document.getElementById("dashboard--transaction--list").appendChild(badge);
    }
}