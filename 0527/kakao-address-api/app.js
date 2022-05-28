import express, { application } from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view 경로 설정
app.set('views', __dirname + '/public');

// view engine을 ejs로 설정 - html 렌더링
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// static path 설정
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.post('/api/order', (req, res) => {
    const {
        receiverName,
        receiverPhoneNumber,
        postalCode,
        address1,
        address2,
        request
      } = req.body;

      const newData = {
          ...(receiverName && { receiverName}),
          ...(receiverPhoneNumber && { receiverPhoneNumber }),
          ...(postalCode && { postalCode }),
          ...(address1 && { address1 }),
          ...(address2 && { address2 }),
          ...(request && { request }),
      }
      
      res.status(201).json(newData);
});

export { app };