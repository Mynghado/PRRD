// project.js
// TODO : Write parameters
// TODO : Write request handling
import axios from "axios";

export default {
  data() {
    return { resourceURL: "http://localhost:4000/utilisateur " };
  },

// CRUD Methods : User
  getUsers: () => {
    axios.get(resourceURL), console.log("getUsers ");
  },
  getUser: ({ id }) => {
    axios.get(`${resourceURL}/${id}`), console.log("getUser");
  },
  createUser: () => {
    axios.post(resourceURL), console.log("createUser");
  },
  updateUser: ({ id }) => {
    axios.put(`${resourceURL}/${id}`), console.log("updateUser");
  },
  deleteUser: ({ id }) => {
    axios.delete(`${resourceURL}/${id}`), console.log("deleteUser");
  }
};
