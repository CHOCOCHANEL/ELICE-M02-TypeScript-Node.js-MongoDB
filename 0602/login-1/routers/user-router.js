import { Router } from "express";
import { userService } from "../services/user-service";

const userRouter = Router();

userRouter.post('/login', (req, res) => {
    const { email, password } = req.body;

    const loginResult = userService.checkUser(email, password);

    res.status(200).json(loginResult);
})

export { userRouter };