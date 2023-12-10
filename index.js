const passwordbox = document.getElementById("Password");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+=~/{}[]?";

const allChart = uppercase+lowercase+numbers+symbols;

const lengtth = 12;

function getpassword() {
  let password = "";
  password += uppercase[Math.floor(Math.random()*uppercase.length)];
  password += lowercase[Math.floor(Math.random()*lowercase.length)];
  password += numbers[Math.floor(Math.random()*numbers.length)];
  password += symbols[Math.floor(Math.random()*symbols.length)];

  while(lengtth>password.length){
    password += allChart[Math.floor(Math.random()*allChart.length)];
  }
  
  passwordbox.value = password;
}

function copypassword() {
  navigator.clipboard.writeText(passwordbox.value);
  
  alert('password copied') 
}
