const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

const btn = document.getElementById('submitButton');

const alertFunc = async (e) => {
    e.preventDefault();

    const user = {
        email,
        password,
    };

    if(!email) {
        return alert('이메일을 입력해주세요.');
    }

    if(!password) {
        return alert('패스워드를 입력해주세요.');
    }

    const userJson = JSON.stringify(user);
    const PORT = 5500;
    const URL = `https://${window.location.hostname}:${PORT}`
    const URI = '/api/login';

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