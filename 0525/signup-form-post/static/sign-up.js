const elementName = document.getElementById('name');
const elementNickname = document.getElementById('nickname');
const elementEmail = document.getElementById('email');
const elementPassword = document.getElementById('password');
const elementPassword2 = document.getElementById('confirm-pwd');

const btn = document.getElementById('submitButton');

const alertFunc = async (e) => {
    e.preventDefault();

    const name = elementName.value;
    const nickname = elementNickname.value;
    const email = elementEmail.value;
    const password = elementPassword.value;
    const password2 = elementPassword2.value;

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

    const PORT = 3000;
    const URL = `http://localhost:${PORT}`
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