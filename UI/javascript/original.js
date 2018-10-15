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
        window.location = "view_products.html"
        return false;
    }
}

function edit() {
    document.getElementById("model").focus();
    return false;
}

function save() {
    alert("Product Successfully saved");
    return true;
}

function add() {
    alert("Product successfully Added to the cart");
    return true;
}