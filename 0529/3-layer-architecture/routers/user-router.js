import { userService } from "../services/user-service";

import { Router } from 'express';

const userRouter = Router();

userRouter.post('/register/child', (req, res) => {
    // Destructuring
    const { email, password, name, age } = req.body;

    const registerResult = userService.addChild(email, age);

    res.json(registerResult);
})

export { userRouter };