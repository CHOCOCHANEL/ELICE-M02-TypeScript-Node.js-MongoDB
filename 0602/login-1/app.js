import express from "express";
import { userRouter } from "./routers/user-router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view path
app.set('views', __dirname + '/public');

// view engine
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// static path
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.use('/api', userRouter);

export { app };

