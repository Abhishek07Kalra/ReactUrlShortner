import './signin.css';
import auth from './firebase';
import firebase from 'firebase/app';
import {useState} from 'react';
import {Link , BrowserRouter as Router} from 'react-router-dom';
const SignIn = ({myfunction})=>{
    const [email , setemail] = useState("");
    const [password , setpasword] = useState("");
    const login = ()=>{
        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=>{
            auth.signInWithEmailAndPassword(email , password).then((userCredential)=>{
                myfunction(userCredential.user.email);
                console.log(userCredential.user);
            }).catch((er)=>{
                alert(er.message);
            })
        })
        
    }

    const skip = ()=>{
        myfunction("anonymous");
    }

    return(
        <div className="container top">
            <h1 className="text-center font-bold" style={{color:"white"}}>Sign In</h1>
            <div className="container sign">
                <center>
                    <br/><br/>
                <input type="email" className="text-center input" value={email}onChange={e=>setemail(e.target.value)} placeholder="Enter your email"></input>
                <br/>
                <input type="password" className="text-center input " value={password} onChange={e=>setpasword(e.target.value)} placeholder="Enter your password"></input>
                <br/>
                <button className="but" onClick={login}>LOGIN</button>
                <br/>
                <h5>or</h5>
                <h5 style={{marginBottom:"10px"}}><Link to="/ReactUrlShortner/signup">Signup</Link></h5>
                <p style={{cursor:"pointer"}} onClick={skip}>Skip for now</p>
                <br/>
                </center>
            </div>
        </div>
    );
}
export default SignIn;