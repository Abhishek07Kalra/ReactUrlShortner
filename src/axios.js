import Axios from "axios";

const Instance = Axios.create({
  baseURL: "https://shrivel.herokuapp.com/",
});

export default Instance;
