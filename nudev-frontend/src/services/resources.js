import axios from "axios";
import db from "../services/firebase";
import { projectFirestore } from "../services/firebase";

const baseUrl = "http://localhost:3001/resources";

const getAll = async () => {
  try {
    const snapshot = await db.collection("resources").get();
    return snapshot.docs.map((doc) => (doc = { ...doc.data(), id: doc.id }));
  } catch (error) {
    console.log("Error:", error);
  }

  // AXIOS
  // const response = await axios.get(baseUrl);
  // return response.data;
};

const createNew = async (content) => {
  // FIREBASE
  try {
    const res = await db.collection("resources").add(content);
    return String(res.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }

  // AXIOS
  // const resource = { ...content };
  // const response = await axios.post(baseUrl, resource);
  // return response.data;
};

const editResource = async (id, content) => {
  const response = await axios.put(`${baseUrl}/${id}`, content);
  return response.data;
};

const deleteResource = async (id) => {
  try {
    const res = await db.collection("cities").doc(id).delete();
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }

  // AXIOS
  // const response = await axios.delete(baseUrl + "/" + id);

  // return response.data;
};

export default { getAll, createNew, deleteResource, editResource };
