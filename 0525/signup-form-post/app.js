import express from 'express';

const app = express();

app.use(express.static('static'));

app.post('/api/register', async(req, res, next) => {
    const { 
        name,
        nickname,
        email,
        password
    } = req.body;

    const user = {
        ...(name && { name }),
        ...(nickname && { nickname }),
        ...(email && { email }),
        ...(password && { password }),
    };

    if (user) {
        res.status(201).json(user);
    } else {
        res.status(400);
    }
});

export { app };