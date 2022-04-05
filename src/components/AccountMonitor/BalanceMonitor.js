import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-ropsten.etherscan.io"
});

export default instance;
