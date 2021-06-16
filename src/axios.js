import Axios from 'axios';

const Instance = Axios.create({
   baseURL:"http://cgcshrt.herokuapp.com/" 
});

export default Instance;
