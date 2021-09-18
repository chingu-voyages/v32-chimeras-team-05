import axios from "axios";

const baseUrl = "http://localhost:3001/bookmarks";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createBookmark = async (content) => {
  const bookmark = { ...content };

  const response = await axios.post(baseUrl, bookmark);
  return response.data;
};

const deleteBookmark = async (id) => {
  const response = await axios.delete(baseUrl + "/" + id);

  return response.data;
};

export default { getAll, createBookmark, deleteBookmark };
