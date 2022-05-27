const name = document.getElementById('name').value;
const nickname = document.getElementById('nickname').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const password2 = document.getElementById('confirm-pwd').value;

const btn = document.getElementById('submitButton');

const alertFunc = async (e) => {
    e.preventDefault();

    if (password !== password2) {
        return alert('Check your password please.');
    }

    const user = {
        name,
        nickname,
        email,
        password,
    };

    const userJson = JSON.stringify(user);
    const PORT = 5500;
    const URL = `https://${window.location.hostname}:${PORT}`
    const URI = '/api/register';

    const res = await fetch(URL + URI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: userJson,
    });

    if (res.status === 201) {
        alert("Congratulations! You're a member of us now.");
    } else {
        alert("Failure! " + res.statusText);
    }

    const result = await res.json();
    console.log(result);
}

btn.addEventListener('click', alertFunc);