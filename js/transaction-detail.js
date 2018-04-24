var http = new XMLHttpRequest();
var url = "http://127.0.0.1:8000/api/categories/";
http.open("GET", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/json;charset=UTF-8");
http.setRequestHeader("Authorization", "token " + localStorage.getItem('token'));

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        var resData = JSON.parse(http.responseText);
        createCategoryList(resData);
    }
}
http.send();

function createCategoryList(data) {
    var select = document.getElementById("categoryList");
    for(var d in data) {
        var option = document.createElement('option');
        option.value = data[d].id;
        option.text = data[d].name;
        select.appendChild(option);
    }
}