// Sign up form

function safeInput() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    password = hashPassword(password);
  
    localStorage.setItem(username, password);

    
  } 

  function ValidateEmail(mail) 
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
    {
      return (true)
    }
      alert("You have entered an invalid email address!")
      return (false)
  }