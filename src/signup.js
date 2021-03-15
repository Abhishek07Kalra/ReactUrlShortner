import './signin.css';
import auth from './firebase';
import {useState} from 'react';
import {Link} from 'react-router-dom';
const Signup = ({myfunction})=>{
    const [email , setemail] = useState("");
    const [password , setpasword] = useState("");
    const login = ()=>{
        auth.setPersistence(auth.Auth.Persistence.LOCAL).then(()=>{
            auth.createUserWithEmailAndPassword(email , password).then((userCredential)=>{
                userCredential.user.sendEmailVerification();
                document.getElementById('hide').style.display = "block";
                auth.signOut();
                setTimeout(()=>{
                    document.getElementById('hide').style.display = "none";
                    window.location = "/ReactUrlShortner/";
                },5000);
            }).catch((er)=>{
                alert(er.message);
            });
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
                <p id="hide">account created , please verify your email to signin</p>
                <button className="but" onClick={login}>Sign up</button>
                <h5>or</h5>
                <h5 style={{marginBottom:"10px"}}><Link to="/ReactUrlShortner/">SignIn</Link></h5>
                <br/>
                </center>
            </div>
        </div>
    );
}
export default Signup;