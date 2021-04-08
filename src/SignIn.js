import './signin.css';
import {auth , providerGoogle , providerGithub} from './firebase';
import firebase from 'firebase';
import {useState} from 'react';
import Loader from 'react-loader-spinner';
import {Link} from 'react-router-dom';
import GoogleButton from 'react-google-button'
import GithubButton from 'react-github-login-button';
const SignIn = ()=>{
    const [email , setemail] = useState("");
    const [password , setpasword] = useState("");
    const [verifydata , setverify] = useState("Send verification link");
    const [info , setinfo] = useState("Account not found");

    
    // Check for the valid email and password.
    const checkemailpassword = ()=>{
        if(!email.includes('@') || !email.includes('.')){
            document.getElementById('hideemail').style.display = "block";
            setTimeout(()=>{
                document.getElementById('hideemail').style.display = "none";
            } , 5000);
            return true;
        }
        if(password.length < 8){
            document.getElementById('hidepassword').style.display = "block";
            setTimeout(()=>{
                document.getElementById('hidepassword').style.display = "none";
            } , 5000);
            return true;
        }
        return false;
    }

    // Enable the loader
    const loaderenable = ()=>{
        var signup = document.getElementById('sign').style;
        var con = document.getElementById('body').style;
        var loader = document.getElementById('loader').style;
        signup.display = "none";
        con.display = "none";
        loader.display = "block";
        setTimeout(()=>{
            signup.display = "block";
            con.display = "block";
            loader.display = "none";
        },2000)
    }

    
    // Login Function
    const login = ()=>{
        if(checkemailpassword()){
            return;
        }
        loaderenable();
        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=>{
                auth.signInWithEmailAndPassword(email , password).then((userCredential)=>{
                    if(auth.currentUser.emailVerified){
                        // User logged in.
                    }
                    else{
                        document.getElementById('hide').style.display = "block";
                        setTimeout(()=>{
                            document.getElementById('hide').style.display = "none";
                            document.getElementById('emailveri').style.display = "block";
                        },3000);
                    }
                    
                }).catch((er)=>{
                    if(er.message === "There is no user record corresponding to this identifier. The user may have been deleted."){
                        document.getElementById('hideaccount').style.display = "block";
                        setTimeout(()=>{
                            document.getElementById('hideaccount').style.display = "none";
                            
                        },3000);
                        return;
                    }
                    if(er.message === "The password is invalid or the user does not have a password."){
                        setinfo("Wrong Password");
                        document.getElementById('hideaccount').style.display = "block";
                        setTimeout(()=>{
                            document.getElementById('hideaccount').style.display = "none";
                            setinfo("Account not found");
                        },3000);
                        return;
                    }
                    setTimeout(()=>{
                        alert(er.message);
                    },2500);
                    
                })
            
            
        })
        
    }
    
    // Send verification link for email verification
    const sendverificationlink = ()=>{
        checkemailpassword();
        auth.signInWithEmailAndPassword(email , password).then((userCredential)=>{
            userCredential.user.sendEmailVerification();
            auth.signOut();
            setverify("Email Sent!!");
            document.getElementById('emailveri').style.color = "green";
            setTimeout(()=>{
                    setverify("Send verification link")
                    document.getElementById('emailveri').style.display = "none";
            },5000)
        }).catch((er)=>{
            alert(er.message);
        })
    }

    // Skip Function
    const skip = ()=>{
        loaderenable();
        auth.signInAnonymously().then((user)=>{
            console.log(user);
        }).catch(alert);
    }

    // Google Login Function
    const GoogleLogin = ()=>{
        auth.signInWithPopup(providerGoogle).catch(alert);
    }

    // Github Login Function
    const GithubLogin = ()=>{
        auth.signInWithPopup(providerGithub).catch(alert);
    }

    return(
        <div className="container top">
            <h1 className="text-center font-bold" id="sign" style={{color:"white"}}>Sign In</h1><br/>
            <div className="container sign" id="body">
                <center>
                    <br/><br/>
                <input type="email" className="text-center input" value={email}onChange={e=>setemail(e.target.value)} placeholder="Enter your email"></input>
                <p id="hideemail">Invalid Email </p>
                <input type="password" className="text-center input " value={password} onChange={e=>setpasword(e.target.value)} placeholder="Enter your password"></input>
                <br/>
                <p id="hidepassword">Invalid Password</p>
                <p id="hide">Please verify your email </p>
                <p id="hideaccount">{info}</p>
                <p id="emailveri" onClick={sendverificationlink}>{verifydata}</p>
                <button className="but" onClick={login}>LOGIN</button><br/>
                <hr/>
                <GoogleButton onClick={GoogleLogin}/><br/>
                <GithubButton onClick={GithubLogin}/>
                <p className="merge">
                <p style={{marginBottom:"10px"}}><Link to="/ReactUrlShortner/signup">Signup</Link></p>
                <p className="skip" style={{cursor:"pointer"}} onClick={skip}>Skip for now</p>
                <p className="s" style={{cursor:"pointer"}} ><Link to="/ReactUrlShortner/reset">Forget password</Link></p>
                </p><br/>
                </center>
            </div>
            <center>
            <div id="loader" style={{display:"none"}}>
                <Loader
                type="TailSpin"
                color="rgb(155, 236, 34)"
                height={70}
                width={70} //3 secs
                />
            </div>
            </center>
        </div>
    );
}
export default SignIn;