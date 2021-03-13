import Axios from 'axios';

const Instance = Axios.create({
   baseURL:"https://cgcshrt.herokuapp.com" 
});

export default Instance;
