function show() {
    document.getElementById('menu-bar').style.cssText = "left:0%!important;";
    document.getElementById('click').className = "fa fa-times icon";
    document.getElementById('click').setAttribute("onclick", "hide()");
}

function hide() {
    document.getElementById('menu-bar').style.cssText = "left:-100%!important;";
    document.getElementById('click').className = "fa fa-bars icon";
    document.getElementById('click').setAttribute("onclick", "show()");
}

const pass = document.getElementById('pass');
const confirmPass = document.getElementById('confirm');
const register = document.getElementById('register');
const email = document.getElementById('email');

register.addEventListener('click', checkingConfrimPassword);

function checkingConfrimPassword() {
    if (email.value === '' || pass.value === '') {
        alert('Email or password are missing');
        return;
    }
    if (pass.value !== confirmPass.value) {
        alert('The password and confirm password are not the same');
        return;
    }
    console.log(email.value, pass.value, confirmPass.value);
    signIn(email.value, pass.value, confirmPass.value);
}

async function signIn(email, password, passwordConfirm) {
    const response = await fetch('/App/Register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
            passwordConfirm
        }),
    });

    const data = await response.json();

    if (response.ok) {
        alert('Sign in successful, you can now log in');
    } else {
        alert(data.message || 'An error occurred');
    }
    console.log(data);
}

const login = document.getElementById('login');
login.addEventListener('click', login2);

const loginEmail = document.getElementById('loginEmail');
const loginPass = document.getElementById('loginPass');
const h1 = document.getElementById('h1');

function login2() {
    if (loginEmail.value === '' || loginPass.value === '') {
        alert('Empty fields');
        return;
    }
    console.log(loginEmail.value);
    Login(loginEmail.value, loginPass.value);
}

async function Login(email, password) {
    const user = await fetch('/App/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        }),
    });

    if (!user.ok) {
        alert('Invalid login, please check your email or password and register if you haven\'t');
        return;
    }

    const data = await user.json();
    alert('Successful login');
    h1.innerHTML = email;
}
