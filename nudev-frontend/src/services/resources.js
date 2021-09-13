import axios from "axios";

const baseUrl = "http://localhost:3001/resources";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const resource = { ...content };

  const response = await axios.post(baseUrl, resource);
  return response.data;
};

const editResource = async (id, content) => {
  const response = await axios.put(`${baseUrl}/${id}`, content);
  return response.data;
};

const deleteResource = async (id) => {
  const response = await axios.delete(baseUrl + "/" + id);

  return response.data;
};

export default { getAll, createNew, deleteResource, editResource };
