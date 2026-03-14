document.addEventListener("DOMContentLoaded", function(){

let contactForm = document.getElementById("contactForm");

if(contactForm){
contactForm.addEventListener("submit", function(e){

e.preventDefault();
alert("Message Sent Successfully!");

});
}

let loginForm = document.getElementById("loginForm");

if(loginForm){
loginForm.addEventListener("submit", function(e){

e.preventDefault();
alert("Login Successful!");

});
}

});