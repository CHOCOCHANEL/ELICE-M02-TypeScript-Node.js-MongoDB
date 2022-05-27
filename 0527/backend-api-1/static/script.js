const btn = document.getElementById('requestButton');
const toResult = document.getElementById('result');

btn.addEventListener('click', async (e) => {
    e.preventDefault;

    const res = await fetch('/material/1');
    const result = await res.json();

    toResult.innerText = result.content;
});