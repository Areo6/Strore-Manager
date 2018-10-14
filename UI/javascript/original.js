function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "admin@store.com" && password == "admin") {
        return true;
    }
    if (email == "admin@store.com") {
        alert("Wrong Password for Admin User")
        return false;
    } else {
        window.location = "login.html"
        return false;
    }
}

function edit() {
    document.getElementById("model").focus();
    return false;
}