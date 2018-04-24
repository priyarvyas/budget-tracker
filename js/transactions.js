
$(document).ready(function () {

    (function ($) {
        var http = new XMLHttpRequest();
        var url = "http://127.0.0.1:8000/api/transactions/";
        http.open("GET", url, true);

        //Send the proper header information along with the request
        http.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        http.setRequestHeader("Authorization", "token " + localStorage.getItem('token'));

        http.onreadystatechange = function() {//Call a function when the state changes.
            if(http.readyState == 4 && http.status == 200) {
                var resData = JSON.parse(http.responseText);
                createTransactionList(resData);
            }
        }
        http.send();

        $('#header__icon').click(function (e) {
            e.preventDefault();
            $('body').toggleClass('with--sidebar');
        });

        $('#site-cache').click(function (e) {
            $('body').removeClass('with--sidebar');
        });

    })(jQuery);

});

var createTransactionList = function (arrData) {
    for (var key in arrData) {
        var name = arrData[key].name;
        var type = arrData[key].type;
        var category = arrData[key].category;
        var month = arrData[key].created_at;
        var value = arrData[key].value;
        var badge = document.createElement('div');
        badge.className = 'badge';
        var htmlStr =
            '<div>' + name +
            '<small class="location">' + category + '</small>' + '<small class="location">' + type + '</small>' + '<small class="location">' + months[(month - 1)] + '</small>' + '</div>';
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



