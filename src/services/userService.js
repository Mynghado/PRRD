import UserApi from '../api/userApi'

export default {
  getUsers () {
    return UserApi().get();
  },
  // TODO MOCK
  authenticate(user){
    return UserApi().post('/login',user);
  },
  createUser(user){
      return UserApi().post('',user);
  }
}