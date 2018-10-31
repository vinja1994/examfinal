// Sign up form

function safeInput() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    password = hashPassword(password);
  
    localStorage.setItem(username, password);

    
  } 

