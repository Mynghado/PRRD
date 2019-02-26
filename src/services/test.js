/* eslint-disable */
// test.js
// TODO : Write other services files
// TODO : Write common URL
// TODO : Write error catching
import axios from "axios";

export default {
  data() {
    return {
      resourceURL: "http://localhost:3000/test"
    };
  },

  // CRUD Methods : Project
  getTests() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`http://localhost:3000/test/get`);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  },
  getTest(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`http://localhost:3000/test/get/${id}`);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  },
  createTest(test) {
    return axios.post(`http://localhost:3000/test/post`, {
      nom: test.nom,
      age: test.age
    });
  },
  updateTest(test) {
    return axios.put(`http://localhost:3000/test/put/${test.id}`, {
      nom: test.nom,
      age: test.age
    });
  },
  deleteTest(id) {
    return axios.delete(`http://localhost:3000/test/delete/${id}`);
  }
};

// CRUD Methods : Tasks

// CRUD Methods : People
