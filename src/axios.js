import Axios from 'axios';

const Instance = Axios.create({
  // baseURL:"https://cgcshrt.herokuapp.com" 
  baseURL:"http://localhost:4000"
});

export default Instance;
