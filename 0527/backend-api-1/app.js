import express from 'express';

const app = express();

app.use(express.static('static'));

app.get('/material/1', (req, res)=>{
    const result = "success";
    const content = "What Backend Developer does is to make server.";
    const data = {
        result,
        content,
    }

    res.json(data);
});

export { app };