import Loader from "react-loader-spinner";
import './loading.css';
const LoaderComp = ()=>{
    
    return(
        <center>
        <div id="loader">
        <Loader
        type="TailSpin"
        color="rgb(155, 236, 34)"
        height={70}
        width={70}
        timeout={5000} //3 secs
        />
        </div>
        </center>
        
    );
}
export default LoaderComp;