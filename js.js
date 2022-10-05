let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id('name'); 
let email = id('email'); 
let password = id('password'); 
let form = id('form'); 
let submit = id('submit');
let signUp= id('signup-btn');

let error = classes('error'); 





// Event Listener for form ==================
form.addEventListener('submit', (e) => { 
    e.preventDefault();
engine(username,0,"Username cannot be blank"); 
engine(email, 1, "Email can not be blank"); 
engine(password, 2, "Password cannot be blank"); 

});





// This ENGINE DOES ALL THE WORK =========
let engine = (id, serial, message) => { 
    if (id.value.trim() === "") { 
        error[serial].innerHTML = message; 
        id.style.border = "2px red solid";
    }
    else { error[serial].innerHTML = "";
        id.style.border ="2px green solid"; 
    }
} 










// SIGN UP LINK----------------------------------
signUp.addEventListener('click', function() { 
alert('This link does not work') 
signUp.style.color = "red"; 
}
) 