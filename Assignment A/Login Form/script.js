function logIn() {
    var uname = document.getElementById("uname-signin").value;
    var password = document.getElementById("password-signin").value;
    alert("Welcome: " + uname)
}

function check_pass() {
    var pass = document.getElementById("password-signup").value;
    var cpass = document.getElementById("cpassword-signup").value;
    if (pass === cpass) {
        console.log("Same")
        document.getElementById("cpassword-signup").setCustomValidity('');
    } else {
        console.log(" Not Same")
        document.getElementById("cpassword-signup").setCustomValidity('Passwords do not match');
    }
}

function addCountryCode() {
    var countryCode = document.getElementById('country').value;
    if (countryCode) {
        document.getElementById('countryCode').value = countryCode;
    }
}

function signUp() {
    var pass = document.getElementById("password-signup").value;
    var cpass = document.getElementById("cpassword-signup").value;
    if (pass === cpass) {
        alert("Registration Sucessful !!")
    } else {
        alert('Passwords do not match');
    }
}

function resetForm() {
    document.getElementById("uname-signin").value = "";
    document.getElementById("password-signin").value = "";
    document.getElementById("checkbox").checked = false;
}