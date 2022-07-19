displayView = function () {

  // the code to display view


}



window.onload = function () {


  const maindiv = document.getElementById("maindiv");
  const welcomeview = document.getElementById("welcomeView");
  maindiv.innerHTML = welcomeview.innerHTML;
  




}



onsignin = function (e) {

  e.preventDefault();
  var token;
  const loginform = document.getElementById("loginform");
  const email = loginform.email.value;
  const password = loginform.password.value;
  const error = document.getElementById("loginerror");


  console.log("im here");
  if (password.length < 6) {

    error.innerText = ('password must be greater than or equal to 6 characters');
  }

  const response = serverstub.signIn(email, password);
  if (!response.success) {
    error.innerText(response.message);
  }
  else {
      

  }

}



onsignup = function () {

  const signupform = document.getElementById("signupform");

  var username = signupform.username.value;
  const password = signupform.password.value;
  const repeatPassword = signupform.repeatPassword.value;


  var gender = signupform.gender.value;
  var country = signupform.country.value;
  if (password.localcompare(repeatPassword) != 0) {
    // error message
  }
  if (password.value.length < 8) {
    // error message 
  }


  signupform.addEventListener('submit', (e) => {
    e.preventDefault();
  })


}