// step-1: add click eventhandler with the submit  button

document.getElementById('btn-submit').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    if (email == 'admin@gmail.com' && pass === 'admin123') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid Identity');
    }


})