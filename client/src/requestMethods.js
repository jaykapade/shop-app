import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

//TODO Temp using token directly add redux part to it
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmM2MDEwM2Q1OTMzZDk0ZmNkYTg4OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTM1NTQ2MiwiZXhwIjoxNjM1MzU5MDYyfQ.e2PNTrIbU1JdcZNsqEHpX8LZoMkeLulBQucLTB4JTBs";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
