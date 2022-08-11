      displayView = function () {

        // the code to display view


      }



      window.onload = function () {


        const maindiv = document.getElementById("maindiv");
        const welcomeview = document.getElementById("welcomeView");
        const clientView = document.getElementById("clientView");
       // maindiv.innerHTML = welcomeview.innerHTML;
        





      }



      onsignin = function (e) {

        e.preventDefault();
        var token;
        
        const loginform = document.getElementById("loginform");
        const email = loginform.email.value;
        const password = loginform.password.value;
        const error = document.getElementById("loginerror");
        const userprofile= document.getElementById("--");

        console.log("im here");
        if (password.length < 6) {

          error.innerText = ('password must be greater than or equal to 6 characters');
        }

        const response = serverstub.signIn(email, password);
        if (!response.success) {
          error.innerText(response.message);
        }
        else {
          
          // user ko login krana hai idher 
          window.localStorage.setItem('token', response.data);
          maindiv.innerHTML=us
          
          
        }

      }



      onsignup = function () {

        const signupform = document.getElementById("signupform");

        var email = signupform.username.value;
        var firstname = signupform.firstname.value;
        var familyname = signupform.familyname.value;

        var city = signupform.city.value;

        const password = signupform.password.value;
        const repeatPassword = signupform.repeatPassword.value;


        var gender = signupform.gender.value;
        var country = signupform.country.value;
        const error = document.getElementById("loginerror");

        if (password.localcompare(repeatPassword) != 0) {
          
          error.innerText("Passwords Do not match");

          
        }
        if (password.value.length < 8) {

          error.innerText("Password length must be greater than zero");
        }


        signupform.addEventListener('submit', (e) => {
          e.preventDefault();
          
          var user = {
            'email': email,
            'password': password,
            'firstname': firstname,
            'familyname': familyname,
            'gender': gender,
            'city': city,
            'country': country,
            'messages': []
          };
          const response = serverstub.signUp(user);


          
        })


      }

      //document.getElementById("home").addEventListener("click", display);
      
      clickTab = function(tab){
        const userprofilediv = document.getElementById("ProfileDisplay");
        switch(tab)
        {
          case 'home':
          userprofilediv.innerHTML=  test1.innerHTML;

            break;
            case 'browse':
              userprofilediv.innerHTML=  test2.innerHTML;
              break;
              case 'settings':
                userprofilediv.innerHTML=  test3.innerHTML;
                break;
                
        }


        


      }