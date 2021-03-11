import './signin.css';
import auth from './firebase';
import firebase from 'firebase/app';
import {useState} from 'react';
import {Link} from 'react-router-dom';
const Signup = ({myfunction})=>{
    const [email , setemail] = useState("");
    const [password , setpasword] = useState("");
    const login = ()=>{
        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=>{
            auth.createUserWithEmailAndPassword(email , password).then((userCredential)=>{
                myfunction(userCredential.user.email);
                window.location = "/";
            }).catch((er)=>{
                alert(er.message);
            })
        })
        
    }
    return(
        <div className="container top">
            <h1 className="text-center font-bold" style={{color:"white"}}>Sign up</h1>
            <div className="container sign">
                <center>
                    <br/><br/>
                <input type="email" className="text-center input" value={email}onChange={e=>setemail(e.target.value)} placeholder="Enter your email"></input>
                <br/>
                <input type="password" className="text-center input " value={password} onChange={e=>setpasword(e.target.value)} placeholder="Enter your password"></input>
                <br/>
                <button className="but" onClick={login}>Sign up</button>
                <h5>or</h5>
                <h5 style={{marginBottom:"10px"}}><Link to="/">SignIn</Link></h5>
                <br/>
                </center>
            </div>
        </div>
    );
}
export default Signup;