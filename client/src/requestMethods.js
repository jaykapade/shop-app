import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

//TODO Temp using token directly add redux part to it
const TOKEN =
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
    .currentUser &&
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
    .accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
