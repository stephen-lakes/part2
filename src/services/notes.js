import axios from "axios";
import { getUserFromLocalStorage } from "../utils/localStorage.utils";
const baseUrl = "/api/notes";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error("An error occured while trying to get notes ", error);
    throw error;
  }
};

const create = async (newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const payload = {
    ...newObject,
    userId: getUserFromLocalStorage.id,
  };
  try {
    const response = await axios.post(baseUrl, payload, config);
    return response.data;
  } catch (error) {
    console.error("An error occured while trying to create note ", error);
    throw error;
  }
};

const update = async (id, newObject) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, newObject);
    return response.data;
  } catch (error) {
    console.error("An error occured while trying to updaete note ", error);
    throw error;
  }
};

export default {
  getAll,
  create,
  update,
  setToken,
};
