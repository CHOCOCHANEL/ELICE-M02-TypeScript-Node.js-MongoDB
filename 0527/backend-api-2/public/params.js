// 요소들 모음
const uriElem = document.querySelector('#uri');
const number1Input = document.querySelector('#num1');
const number2Input = document.querySelector('#num2');
const requestButton = document.querySelector('#requestButton');
const resultElem = document.querySelector('#result');

// 이벤트 추가
requestButton.addEventListener('click', handleClick);
number1Input.addEventListener('input', handleInput);
number2Input.addEventListener('input', handleInput);

// 버튼 클릭 시, api 요청함
async function handleClick(e) {
  e.preventDefault
  
  const number1 = number1Input.value
  const number2 = number2Input.value

  const res = await fetch(`/compare/${number1}/${number2}`);
  const data = await res.json();
  
  resultElem.innerText = `
    result: ${data.result},
    reason: ${data.reason}
  `;
}

// 칸에 숫자 입력 시, 화면 문구를 바꿈
function handleInput() {
  const number1 = number1Input.value
  const number2 = number2Input.value

  uriElem.innerText = `/compare/${number1}/${number2}`
}