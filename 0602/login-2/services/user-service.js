import { usersData } from "../db/users-data";

class UserService {
    checkUser(email, password) {
        const user = usersData.find(user => user.email === email);

        if(!user){
            return {
                result: 'fail',
                reason: 'Email has not been enrolled yet.',
            };
        }

        const data = [];

        if (password !== user.password) {
            data.result = 'fail';
            data.reason = 'Password does not correct!';
        } else {
            data.result = 'success';
            data.reason = 'Password does correct!';
        }

        return data;
    }
}

const userService = new UserService();
export { userService }