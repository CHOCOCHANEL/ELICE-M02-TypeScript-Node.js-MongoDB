// 요소들 모음
const productIdSelectBox = document.querySelector('#productId')
const requestButton = document.querySelector('#requestButton')
const productContainer = document.querySelector('#productContainer')

// 이벤트 추가
requestButton.addEventListener('click', handleClick)

// 버튼 클릭 시, api 요청함
async function handleClick(e) {
  e.preventDefault
  
  const productId = productIdSelectBox.value

  const res = await fetch(`/product/${productId}`)
  const data = await res.json()
  
  const title = data.title
  const description = data.description
  const price = data.price
  const image = data.image
  
  productContainer.insertAdjacentHTML('beforeend',`
    <div class="box product-item">
      <div>
        <figure>
          <img id="productImage" src="${image}" alt="clothes-image" />
        </figure>
      </div>
      <div class="description">
        <div class="detail">
          <h1 id="productTitle">${title}</h1>
          <p id="productDescription">${description}</p>
        </div>
        <div class="price">
          <h1 id="productPrice">${price}</h1>
        </div>
      </div>
    </div>
  `)
}
