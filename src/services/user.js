// user.js
// TODO : Write parameters
// TODO : Write request handling
import axios from "axios";

export default {
  data() {
    return { resourceURL: "http://localhost:4000/utilisateur " };
  },

// CRUD Methods : User
  getUsers: () => {
    return axios.get(resourceURL), console.log("getUsers ");
  },
  getUser: ({ id }) => {
    return axios.get(`${resourceURL}/${id}`), console.log("getUser");
  },
  createUser: () => {
    return axios.post(resourceURL), console.log("createUser");
  },
  updateUser: ({ id }) => {
    return axios.put(`${resourceURL}/${id}`), console.log("updateUser");
  },
  deleteUser: ({ id }) => {
    return axios.delete(`${resourceURL}/${id}`), console.log("deleteUser");
  }
};
