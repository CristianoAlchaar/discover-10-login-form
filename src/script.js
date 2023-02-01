const mailIcon = document.querySelector("#mail-icon");
const passwordIcon = document.querySelector("#password-icon");
const email = document.querySelector('#email');
const password = document.querySelector('#password');

console.log(mailIcon, passwordIcon, email, password);

email.addEventListener("focus", ()=>{
   mailIcon.src = "assets/mail-focus.svg";
});

email.addEventListener("focusout", ()=>{
    mailIcon.src = "assets/mail.svg";
 });

 password.addEventListener("focus", ()=>{
    passwordIcon.src = "assets/lock-focus.svg";
 });
 
 password.addEventListener("focusout", ()=>{
    passwordIcon.src = "assets/lock.svg";
  });