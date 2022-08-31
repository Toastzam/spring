import axios from 'axios';

const USER_REST_API_URL = 'https://localhost:8080/api/users';

class UserService {

    getUsers(){
        axios.get(USER_REST_API_URL);
    }
}

export default new UserService();