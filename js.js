const names = document.getElementById('name'); 
const password = document.getElementById('password'); 
const form = document.getElementById('form'); 
const errorElement = document.getElementById('error');


form.addEventListener('submit',(e) => { 
    let messages = []
    if (names.value === "" || names.value == null) { 
        messages.push("Need a name"); 
    }

    if (password.value.length <= 6) { 
        messages.push('Password must be longer')
    }

    if (messages.length > 0) { 
        e.preventDefault()
        errorElement.innerText = messages.join('NO')
    }

})