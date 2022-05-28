import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view 경로 설정
app.set('views', __dirname + '/public');

// view engine을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// 기본 path를 /static으로 설정 (css, js 파일 사용을 위해)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.html');
})

app.get('/compare', (req, res) => {
    res.render('params.html');
});

app.get('/compare/:num1/:num2', (req, res) => {
    let { num1, num2 } = req.params;
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    const data = {};

    if (num1 >= num2) {
        data.result = "success";
        data.reason = `${num1}은 ${num2} 이상입니다.`;
    } else {
        data.result = "failure";
        data.reason = `${num1}은 ${num2} 미만입니다.`;
    }

    res.json(data);
})

app.get('/product', (req, res) => {
    res.render('product.html');
})



app.get('/product/:productId', (req, res) => {
    const { productId } = req.params;

    const idx = parseInt(productId) - 1;

    const products = require('./db/product/products.json');

    const productData = products[idx];

    res.json(productData); 
});

app.get('/register', (req, res) => {
    res.render('sign-up-age.html');
});

app.post('/register/adult', (req, res) => {

    const { email, password, name, age } = req.body;

    const data = {}

    if (age >= 20) {
        data.result = 'success';
        data.reason = `${age}는 20 이상입니다.`;
        data.email = email;
    }

    if (age < 20) {
        data.result = 'fail';
        data.reason = `${age}가 성인이 아닙니다.`;
    }

    res.json(data);
})

export { app };


