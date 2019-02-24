// projet.js
// TODO : Write parameters
// TODO : Write request handling
import axios from "axios";

export default {
  data() {
    return { resourceURL: "http://localhost:4000/projet " };
  },

  // CRUD Methods : Project
  getProjects: () => {
    axios.get(resourceURL), console.log("getProjects ");
  },
  getProject: ({ id }) => {
    axios.get(`${resourceURL}/${id}`), console.log("getProject");
  },
  createProject: () => {
    axios.post(resourceURL), console.log("createProject");
  },
  updateProject: ({ id }) => {
    axios.put(`${resourceURL}/${id}`), console.log("updateProject");
  },
  deleteProject: ({ id }) => {
    axios.delete(`${resourceURL}/${id}`), console.log("deleteProject");
  }
};

// CRUD Methods : Tasks

// CRUD Methods : People
