//Login function. In this case we need to check if the password and username is valid
function loginFunction() {
    
  var usr = document.getElementById("usrLogin").value
  var pw = document.getElementById("pwLogin").value

  pw = hashPassword(pw);

  var enableLogin = false;

  for(let i=0; i<localStorage.length; i++)
      if (localStorage.getItem(usr) === pw) {
          enableLogin = true;
      }
  
  if (enableLogin === false){
      
      alert("Wrong password or username!")
  } else if (enableLogin === true) {
      document.getElementById("login").disabled = false;
      window.location.href="mainpage.html";
  }
}


function hashPassword(rawPassword){
  var a = 1, c = 0, h, o;
  if (rawPassword) {
    a = 0;
    /*jshint plusplus:false bitwise:false*/
    //This is a loop that goes through all passwords and emails
    for (h = rawPassword.length - 1; h >= 0; h--) {
      o = rawPassword.charCodeAt(h);
      a = (a<<6&268435455) + o + (o<<14);
      c = a & 266338304;
      a = c!==0?a^c>>21:a;
    }
  }else {
    // If the password is not valid, we'll throw and error we're able to catch
    throw new Error("Password or email is not correct - try again or sign up");
  }
  return String(a);
}






