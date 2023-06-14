// VARIABLES FETCH
const methodOptions = (data, method) =>  {
    const options = {
        method: method,
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(data)    }

return options
}

const getOptions = {
    method: 'get',
    headers: {
        "Content-Type": "application/json"
    }
}

// VARIABLES DOM
const registerButton = document.querySelector('#register-btn')
registerButton.addEventListener('click', register);

function register(){
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    
    const newUser = {
        name,
        id:name.replace(/ /g,'').toLowerCase(),
        email,
        password,
        status : 'OFFLINE'
    }

    fetch('/register', methodOptions(newUser, 'POST'))
    console.log(name, email, password)

}