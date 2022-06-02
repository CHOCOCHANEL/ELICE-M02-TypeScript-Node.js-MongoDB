const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const submitButton = document.getElementById('submitButton');
const resultElem = document.getElementById('result');

// api Request
async function handleSubmit(e) {
    e.preventDefault;

    const email = emailInput.valie;
    const password = passwordInput.value;
    const name = nameInput.value;
    const age = parseInt(ageInput.value);

    if (!email || !password || !name) {
        return alert('Check every field filled');
    }

    if (!age) {
        return alert('Check Age field. 0 for age is not allowed');
    }

    const user = {
        email,
        password,
        name,
        age,
    };

    // POST Request
    const res = await fetch('/api/register/child', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    const { result, reason, email: registeredEmail } = await res.json();

    if (result === 'success') {
        resultElem.innerText = `
        Result: ${result}
        Reason: ${reason}
        Email: ${registeredEmail}
        `;
    }

    if (result === 'fail') {
        resultElem.innerText = `
        Result: ${result}
        Reason: ${reason}
        `;
    }
}

// Event Handler
submitButton.addEventListener('click', handleSubmit);