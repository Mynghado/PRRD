// project.js
// TODO : Write parameters
// TODO : Write request handling
import axios from "axios";

export default {
  data() {
    return { resourceURL: "http://localhost:27017/test" };
  },

  // CRUD Methods : Project
  getProjects: () => {
    return axios.get(`${resourceURL}/get`).then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        this.tests.push({
            id: response.data[i].id,                        
            nom: response.data[i].nom,
            age: response.data[i].age
        })
      }
      return tests
    }), 
    console.log("getProjects ");
  },
  getProject: ({ id }) => {
    return axios.get(`${resourceURL}/${id}`), console.log("getProject");
  },
  createProject: () => {
    return axios.post(resourceURL), console.log("createProject");
  },
  updateProject: ({ id }) => {
    return axios.put(`${resourceURL}/${id}`), console.log("updateProject");
  },
  deleteProject: ({ id }) => {
    return axios.delete(`${resourceURL}/${id}`), console.log("deleteProject");
  }
};

// CRUD Methods : Tasks

// CRUD Methods : People
