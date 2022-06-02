class UserService {
    addChild(email, age) {
        const data = {};

        if (age < 20) {
            data.result = 'success';
            data.reason = `${age} is less than 20.`;
            data.email = email;
        }

        else {
            data.result = 'fail';
            data.reason = `${age} is greater than 20.`;
        }

        return data;
    }
}

const userService = new UserService();

export { userService };