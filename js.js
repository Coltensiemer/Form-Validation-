const name = document.getElementById('name')
const password = document.getElementById('password') 
const form = document.getElementById('form')
const errorElement = document.getElementById('error')






form.addEventListener('submit',(e) => { 
    let messages = [];
    
   
    if (name.value === "" || name.value == null) { 
        messages.push("User Name is Missing") 
    }
    else { 
         return true; 
    }


    if (password.value.length <= 6) { 
        messages.push('Password must be longer')
    }

   if (password.value.length >= 20) { 
        messages.push('Password is too long') 
    }

    if (password.value === 'password') { 
        messages.push('Password can not be called password')
    }

    if (messages.length > 0) { 
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

}) 

