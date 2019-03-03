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
  getProjets() {
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
  getProjet(id) {
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
  createProjet(projet) {
    return axios.post(`http://localhost:3000/projet`, {
      // DATAS
    });
  },
  updateProjet(projet) {
    return axios.put(`http://localhost:3000/projet/${projet.id}`, {
      // DATAS
    });
  },
  deleteProjet(id) {
    return axios.delete(`http://localhost:3000/projet/${id}`);
  }
};