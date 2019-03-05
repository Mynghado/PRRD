/* eslint-disable */
// projet.js
// TODO : Write other services files
// TODO : Write common URL
// TODO : Write error catching
import axios from "axios";

export default {
  data() {
    return {
      resourceURL: "http://localhost:3000/projet"
    };
  },

  // CRUD Methods : Project
  getProjects() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`http://localhost:3000/projet/`);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  },
  getProject(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`http://localhost:3000/projet/${id}`);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  },
  createProject(project) {
    return axios.post(`http://localhost:3000/projet`, project);
  },
  updateProject(project) {
    return axios.put(`http://localhost:3000/projet/${project.id}`, {
      // DATAS
    });
  },
  deleteProject(id) {
    return axios.delete(`http://localhost:3000/projet/${id}`);
  }
};