// 요소들 모음
const emailInput = document.querySelector('#emailInput')
const passwordInput = document.querySelector('#passwordInput')
const fullNameInput = document.querySelector('#fullNameInput')
const ageInput = document.querySelector('#ageInput')
const submitButton = document.querySelector('#submitButton')
const resultElem = document.querySelector('#result')

// 이벤트 추가
submitButton.addEventListener('click', handleSubmit)

// 버튼 클릭 시, api 요청함
async function handleSubmit(e) {
  e.preventDefault
  
  const email = emailInput.value
  const password = passwordInput.value
  const fullName = fullNameInput.value
  const age = parseInt(ageInput.value)
  
  if (!email || !password || !fullName) {
    return alert("모두 입력해 주세요.")
  }
  
  if (!age) {
    return alert("나이를 입력해 주세요. 0은 불가합니다.")
  }
  
  const data = {
    email,
    password,
    fullName,
    age
  }

  // POST 요청
  const res = await fetch('/api/register/child', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  const { result, reason, email: registeredEmail } 
    = await res.json()
  
  if (result === "success") {
    resultElem.innerText = `
      회원가입: 성공!
      사유: ${reason}
      이메일: ${registeredEmail}
    `
  }
  
  if (result === "fail") {
    resultElem.innerText = `
      회원가입: 실패..
      사유: ${reason}
    `
  }
}
