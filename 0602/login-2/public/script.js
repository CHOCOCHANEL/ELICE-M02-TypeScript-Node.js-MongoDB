const emailSelectBox = document.getElementById('emailSelectBox');
const passwordInput = document.getElementById('passwordInput');
const submitButton = document.getElementById('submitButton');
const resultElem = document.getElementById('result');

// api Request
async function handleSubmit(e) {
    e.preventDefault;

    const email = emailSelectBox.value;
    const password = passwordInput.value;

    if (!email || !password) {
        return alert('Check every field filled');
    }

    const user = {
        email,
        password,
    };

    // POST Request
    const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    const { result, reason } = await res.json();

    if (result === 'success') {
        resultElem.innerText = `
        Result: ${result}
        Reason: ${reason}
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