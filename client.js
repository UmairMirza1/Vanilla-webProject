displayView = function () {
  // the code to display view
};

window.onload = function () {
  const maindiv = document.getElementById("maindiv");
  const welcomeview = document.getElementById("welcomeView");
  const clientView = document.getElementById("clientView");
  maindiv.innerHTML = welcomeview.innerHTML;
};

onsignin = function () {
  const email = document.getElementById("signinEmail").value;
  const password = document.getElementById("signinPassword").value;
  const error = document.getElementById("loginError");
  const clientView = document.getElementById("clientView");
  const maindiv = document.getElementById("maindiv");
  console.log("im here");

  const response = serverstub.signIn(email, password);

  console.log(response);

  if (!response.success) {
    error.innerText = response.message;
  } else {
    localStorage.setItem("token", response.data);

    maindiv.innerHTML = clientView.innerHTML;
  }
};

onsignup = function () {
  console.log("click");
  //        const formData = new FormData(form);
  // for (var pair of formData.entries()) {
  //   console.log(pair[0] + ", " + pair[1]);
  // }
  const firstname = document.getElementById("firstName").value;
  const familyname = document.getElementById("familyName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const repeatPassword = document.getElementById("repeatPassword").value;
  const gender = document.getElementById("gender").value;
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  console.log(firstname, familyname, email, password, repeatPassword);

  const error = document.getElementById("signuperror");

  if (password !== repeatPassword) {
    // error.innerText("Passwords Do not match");
    console.log("no");
    return;
  }

  if (password.length < 8) {
    error.innerText = "Password length must be greater than eight";

    console.log("nooo");
    return;
  }

  const user = {
    email,
    password,
    firstname,
    familyname,
    gender,
    city,
    country,
  };

  console.log(user);

  const response = serverstub.signUp(user);

  console.log(response);
  if (!response.success) {
    error.innerText = response.message;
  } else {
    window.alert("you can login now ");
  }
};

//document.getElementById("home").addEventListener("click", display);

clickTab = function (tab) {
  const userprofilediv = document.getElementById("ProfileDisplay");
  // const test1 = document.getElementById("test1");
  // const test2 = document.getElementById("test2");
  // const test3 = document.getElementById("test3");

  const home = document.getElementById("hometab");
  const browse = document.getElementById("browsetab");
  const settings = document.getElementById("settingstab");

  switch (tab) {
    case "home":
      //  userprofilediv.innerHTML=  test1.innerHTML;
      home.style.display = "block";
      settings.style.display = "none";
      browse.style.display = "none";

      break;
    case "browse":
      // userprofilediv.innerHTML=  test2.innerHTML;
      browse.style.display = "block";
      home.style.display = "none";
      settings.style.display = "none";

      break;
    case "settings":
      //  userprofilediv.innerHTML=  test3.innerHTML;

      settings.style.display = "block";
      browse.style.display = "none";
      home.style.display = "none";
      break;
  }
};
