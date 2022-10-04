const name = document.getElementById('name')
const password = document.getElementById('password') 
const login_Btn = document.getElementById('submit')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const submit = document.getElementById('submit'); 


function validation() { 
    const name = document.getElementById('name')
    const password = document.getElementById('password') 
    const form = document.getElementById('form')
    const errorElement = document.getElementById('error')
   

   
    const validate = (e) => { 
        e.preventDefault(); 

    if (name.value === " " || password.value === " "){
        prompt("Enter your name"); 
        name.focus(); 
        return false; 
    }

    } 
}

    submit.addEventListener('click', validate);

