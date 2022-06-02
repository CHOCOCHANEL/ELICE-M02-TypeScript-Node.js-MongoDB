import { Router } from "express";
import { userService } from "../services/user-service";

const userRouter = Router();

userRouter.post('/login', (req, res) => {
    const { email, password } = req.body;

    const result = userService.checkUser(email, password);

    res.json(result);
});

export { userRouter }
