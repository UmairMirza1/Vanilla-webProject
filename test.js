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
