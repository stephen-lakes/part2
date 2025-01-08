import axios from "axios";
import { getUserFromLocalStorage } from "../utils/localStorage.utils";
const baseUrl = "/api/notes";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const payload = {
    ...newObject,
    userId: getUserFromLocalStorage.id,
  };
  const request = axios.post(baseUrl, payload, config);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default {
  getAll,git 
  create,
  update,
  setToken,
};
