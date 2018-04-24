// JavaScript source code


$(document).ready(function () {

    (function ($) {
        $('#idBtnLogin').click(function (e) {
            //e.preventDefault();
            var vEmail = document.getElementById('idTxtEmail');
            var vPswd = document.getElementById('idTxtPswd');
            var http = new XMLHttpRequest();
            var url = "http://127.0.0.1:8000/login/";
            var params = {'email': vEmail.value, 'password': vPswd.value};
            http.open("POST", url, true);

            //Send the proper header information along with the request
            http.setRequestHeader("Content-type", "application/json;charset=UTF-8");

            http.onreadystatechange = function() {//Call a function when the state changes.
                if(http.readyState == 4 && http.status == 200) {
                    var resData = JSON.parse(http.responseText);
                    localStorage.setItem('user', resData.username);
                    localStorage.setItem('token', resData.token);
                    location.href = 'dashboard.html';
                }
            }
            http.send(JSON.stringify(params));
            alert("user not found");
        });


        $('#idRegister').click(function (e) {
            //e.preventDefault();
            var username = document.getElementById("idUserName").value;
            var email = document.getElementById('idEmailId').value;
            var password = document.getElementById('idPassword').value;
            var password_confirm = document.getElementById('idCPassword').value;

            var name_error = document.getElementById('name_error');
            var email_error = document.getElementById('email_error');
            var password_error = document.getElementById('password_error');

            //username.addEventListener('blur', nameVerify, true);
            //email.addEventListener('blur', emailVerify, true);
            //password.addEventListener('blur', passwordVerify, true);

            if (username == "" && email == "" && password == "") {
                //$('#idUserName').style.border("border", "1px solid red");
                document.getElementById("idUserName").style.border = "1px solid red";
                document.getElementById('username_div').style.color = "red";
                document.getElementById("name_error").textContent = "Username is required";
                document.getElementById("idEmailId").style.border = "1px solid red";
                document.getElementById('email_div').style.color = "red";
                document.getElementById("email_error").textContent = "Email is required";
                document.getElementById("idPassword").style.border = "1px solid red";
                document.getElementById('password_div').style.color = "red";
                document.getElementById('pass_confirm_div').style.color = "red";
                document.getElementById("idCPassword").style.border = "1px solid red";
                document.getElementById("password_error").textContent = "Password is required";
            }

            if (username == "") {
                document.getElementById("idUserName").style.border = "1px solid red";
                document.getElementById('username_div').style.color = "red";
                document.getElementById("name_error").textContent = "Username is required";
                document.getElementById("name_error").focus();
                //return false;
            }
            if (username != "") {
                document.getElementById("idUserName").style.border = "1px solid #5e6e66";
                document.getElementById('username_div').style.color = "#5e6e66";
                document.getElementById("name_error").innerHTML = "";
                //return false;
            }


            //if (username.length < 3) {
            //    document.getElementById("idUserName").style.border = "1px solid red";
            //    document.getElementById('username_div').style.color = "red";
            //    document.getElementById("name_error").textContent = "Username must be at least 3 characters";
            //    document.getElementById("name_error").focus();
            //    return false;
            //}

            if (email == "") {
                document.getElementById("idEmailId").style.border = "1px solid red";
                document.getElementById('email_div').style.color = "red";
                document.getElementById("email_error").textContent = "Email is required";
                document.getElementById("email_error").focus();
               // return false;
            }
            if (email != "") {
                document.getElementById("idEmailId").style.border = "1px solid #5e6e66";
                document.getElementById('email_div').style.color = "#5e6e66";
                document.getElementById("email_error").innerHTML = "";
             //   return false;
            }

            if (password == "") {
                document.getElementById("idPassword").style.border = "1px solid red";
                document.getElementById('password_div').style.color = "red";
                document.getElementById('pass_confirm_div').style.color = "red";
                document.getElementById("idCPassword").style.border = "1px solid red";
                document.getElementById("password_error").textContent = "Password is required";
                document.getElementById("idPassword").focus();
               // return false;
            }

            
            if (password != "") {
                document.getElementById("idPassword").style.border = "1px solid #5e6e66";
                document.getElementById('password_div').style.color = "#5e6e66";
                document.getElementById('pass_confirm_div').style.color = "#5e6e66";
                document.getElementById("password_error").innerHTML = "";
               // return false;
            }
            if (password != password_confirm) {
                document.getElementById("idPassword").style.border = "1px solid red";
                document.getElementById('password_div').style.color = "red";
                document.getElementById('pass_confirm_div').style.color = "red";
                document.getElementById("idCPassword").style.border = "1px solid red";
                document.getElementById("password_error").innerHTML = "The two passwords do not match";
                //return false;
            }
            if (password == password_confirm && (password != "" && password_confirm != "")) {
                document.getElementById("idPassword").style.border = "1px solid #5e6e66";
                document.getElementById("idCPassword").style.border = "1px solid #5e6e66";
                document.getElementById('pass_confirm_div').style.color = "#5e6e66";
                document.getElementById("password_error").innerHTML = "";
                //return false;
            }
            
            
        });

    })(jQuery);

  
    function nameVerify() {
        var username = document.getElementById("idUserName").value;
        if (username != "") {
            document.getElementById("idUserName").style.border = "1px solid red";
            document.getElementById('username_div').style.color = "red";
            document.getElementById("name_error").innerHTML = "";
            return true;
        }
        
    }
    function emailVerify() {
        var email = document.getElementById('idEmailId').value;
        if (email != "") {
            document.getElementById("idEmailId").style.border = "1px solid #5e6e66";
            document.getElementById('email_div').style.color = "#5e6e66";
            document.getElementById("email_error").innerHTML = "";
            return true;
        }
        
    }
    function passwordVerify() {
        var password = document.getElementById('idPassword').value;
        var password_confirm = document.getElementById('idCPassword').value;

        if (password != "") {
            document.getElementById("idPassword").style.border = "1px solid #5e6e66";
            document.getElementById('password_div').style.color = "#5e6e66";
            document.getElementById('pass_confirm_div').style.color = "#5e6e66";
            document.getElementById("password_error").innerHTML = "";
            return true;
        }
        if (password === password_confirm) {
            document.getElementById("idPassword").style.border = "1px solid #5e6e66";
            document.getElementById('pass_confirm_div').style.color = "#5e6e66";
            document.getElementById("password_error").innerHTML = "";
            return true;
        }
    }


});
