function test() {
    var uid = document.getElementById("username").value;
    var email = document.getElementById("email").value;

var user = localStorage.setItem(uid,email);

localStorage.getItem(uid,email);



}
