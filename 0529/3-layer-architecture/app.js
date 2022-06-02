import express from "express";
import { userRouter } from "./routers/user-router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view 경로 설정
app.set('views', __dirname + '/public');

// view engine을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// 기본 path를 /public으로 설정
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.use('/api', userRouter);

export { app };
