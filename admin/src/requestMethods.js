import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

//TODO Temp using token directly add redux part to it
const TOKEN = "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
