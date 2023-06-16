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

const loginButton = document.querySelector('#login-btn')
loginButton.addEventListener('click', login);



function login(){
    // alert("FUNCIONA")
    const loginEmail = document.querySelector('#loginEmail').value
    const loginPassword = document.querySelector('#loginPassword').value

    const authUser = {
        loginEmail,
        loginPassword        
    }

    fetch('/login', methodOptions(authUser, 'PUT'))

}
// test