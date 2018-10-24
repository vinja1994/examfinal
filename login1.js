// User class created to implement features
class User {

  // The constructor for our class, which will allow us to create new objects of our class
    constructor(username, password) {
      this.username = username;
      this.password = this.hashPassword(password);
      this.setLastAccess();
    }
  
    // Function that allows us to set lastAccess to current time in unix time (Date.now())
    setLastAccess(){
      this.lastAccess = Date.now();
    }
  
    // Simple function to hash passwords in order for us not to store then in clear text
    hashPassword(rawPassword){
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
  }
  
  // We set a debug variable in order to switch on or off debug mode of our small program
  var debug = 1;
  


  // Initialize an empty array
  var users = JSON.parse(localStorage.getItem("users"));
  
  // Bind the button to a variable for later use
  var submit = document.getElementById('submit');
  
  // Bind the span for result text for later use
  var resultSpan = document.getElementById('loginResult');
  
  // Bind a counter in order to see if the user has tried to login too many times
  var counter = 3;
  
  // Bind the onClick-function to our own function
 
 if (submit !== null) {

  submit.onclick = function(){
  
    // Bind the two input fields and get the value
    var inputUsername = document.getElementById('username');
    var inputPassword = document.getElementById('password');


    if(inputUsername.value.length == 0 || inputPassword.value.length == 0){
      // We set the resultspan with a new text and return false to get out of this function
      resultSpan.innerText = "You must write your email and valid password";
      return false;
    }

    console.log(users);
  
    // We loop through all our users and return true if we find a match
    for(var i = 0; i < users.length; i++) {
  
      // Bind user to a variable for easy use
      var userType = new User("test", "test");
      var user = users[i];

        // We try to create a variable with the hashed version of the inputPassword
        var hashedInputPassword = userType.hashPassword(inputPassword.value);

      // If username and password we have in put matches the one in our loop
      if(user.username == inputUsername.value && user.password == hashedInputPassword) 
      {
      return window.location.replace("file:///Users/VincentSchulin/Desktop/web-projects/Github/mainpage.html")
      }
    else 
    {
      resultSpan.innerText = "Wrong username or password - Please try again";
    }
    }
    } 

  }

//Create an account - Link to sign-up form
if (onclick !== null)

document.getElementById("createaccount").onclick = function () {
    location.href = "signup1.html";
};


function lastModified() {
  var modiDate = new Date(document.lastModified);
  var showAs = modiDate.getDate() + "-" + (modiDate.getMonth() + 1) + "-" + modiDate.getFullYear();
  return showAs
}

function GetTime() {
  var modiDate = new Date();
  var Seconds

  if (modiDate.getSeconds() < 10) {
      Seconds = "0" + modiDate.getSeconds();
  } else {
      Seconds = modiDate.getSeconds();
  }

  var modiDate = new Date();
  var CurTime = modiDate.getHours() + ":" + modiDate.getMinutes() + ":" + Seconds
  return CurTime
}

document.write("Last updated on ")
document.write(lastModified() + " @ " + GetTime());
document.write("");

// Sign up form

var signup = document.getElementById('signup');
if(signup !== null){
  signup.onclick = function(){

      var usernamesignup = document.getElementById("usernamesignup").value;
      var passwordsignup = document.getElementById("passwordsignup").value;

      var newUser = new User(usernamesignup, passwordsignup);
      users.push(newUser);
  
      localStorage.setItem("users", JSON.stringify(users)); 

      console.log(users);
  } 
}
//local storage








