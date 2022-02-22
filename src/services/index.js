import axios from "axios";

const instance = axios.create({
  baseURL: "https://exercism.org/api/v2/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  async getTracks() {
    try {
      const response = await instance.get("tracks");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
