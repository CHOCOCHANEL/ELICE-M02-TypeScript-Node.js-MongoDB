import { userData } from "../db/users-data";

class UserService {
    checkUser(email, password) {
        const user = userData.find(user => user.email === email);

        const data = {};

        if (password !== user.password) {
            data.result = 'fail';
            data.reason = 'Password does not correct';
        } else {
            data.result = 'success';
            data.reason = 'Password does correct';
        }

        return data;
    }
}

const userService = new UserService();

export { userService };