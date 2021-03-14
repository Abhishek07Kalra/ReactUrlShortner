import './signin.css';
import auth from './firebase';
import firebase from 'firebase/app';
import {useState} from 'react';
import {Link , BrowserRouter as Router} from 'react-router-dom';
const SignIn = ({myfunction})=>{
    const [email , setemail] = useState("");
    const [password , setpasword] = useState("");
    const [verifydata , setverify] = useState("Send verification link");
    const login = ()=>{
        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=>{
                auth.signInWithEmailAndPassword(email , password).then((userCredential)=>{
                    if(auth.currentUser.emailVerified){
                        myfunction(userCredential.user.email);
                    console.log(userCredential.user);
                    }
                    else{
                        document.getElementById('hide').style.display = "block";
                        setTimeout(()=>{
                            document.getElementById('hide').style.display = "none";
                            document.getElementById('emailveri').style.display = "block";
                        },5000);
                    }
                    
                }).catch((er)=>{
                    alert(er.message);
                })
            
            
        })
        
    }

    const sendverificationlink = ()=>{
        auth.signInWithEmailAndPassword(email , password).then((userCredential)=>{
            userCredential.user.sendEmailVerification();
            setverify("Email Sent!!");
            document.getElementById('emailveri').style.color = "green";
            setTimeout(()=>{
                    setverify("Send verification link")
                    document.getElementById('emailveri').style.display = "none";
            },5000)
            auth.signOut();
        }).catch((er)=>{
            alert(er.message);
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
                <p id="hide">Please verify your email </p>
                <p id="emailveri" onClick={sendverificationlink}>{verifydata}</p>
                <button className="but" onClick={login}>LOGIN</button>
                <br/>
                <h5>or</h5>
                <h5 style={{marginBottom:"10px"}}><Link to="/ReactUrlShortner/signup">Signup</Link></h5>
                <p className="skip" style={{cursor:"pointer"}} onClick={skip}>Skip for now</p>
                <p className="s" style={{cursor:"pointer"}} ><Link to="/ReactUrlShortner/reset">Forget password</Link></p>
                <br/>
                </center>
            </div>
        </div>
    );
}
export default SignIn;