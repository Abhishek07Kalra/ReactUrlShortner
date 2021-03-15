import './signin.css';
import './loading.css';
import auth from './firebase';
import Loader from 'react-loader-spinner';
import firebase from 'firebase';
import {useState} from 'react';
import {Link} from 'react-router-dom';
const Signup = ({myfunction})=>{
    const [email , setemail] = useState("");
    const [password , setpasword] = useState("");
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

    const login = ()=>{
        if(checkemailpassword()){
            return;
        }
        loaderenable();
        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=>{
            auth.createUserWithEmailAndPassword(email , password).then((userCredential)=>{
                userCredential.user.sendEmailVerification();
                document.getElementById('hide').style.display = "block";
                auth.signOut();
                setTimeout(()=>{
                    document.getElementById('hide').style.display = "none";
                    window.location = "/ReactUrlShortner/";
                },5000);
            }).catch((er)=>{
                if(er.message.includes('already in use')){
                    var comp = document.getElementById('hideerr').style;
                    comp.display = "block";
                    setTimeout(()=>{
                        comp.display = "none";
                    },5000);
                    return;
                }
                else{
                    var comp1 = document.getElementById('hideerr');
                    comp1.innerHTML = er.message;
                    comp1.style.display = "block";
                    setTimeout(()=>{
                        comp1.style.display = "none";
                        comp1.innerHTML = "Account already exist";
                    },5000);
                }
                
            });
        })
        
    }
    return(
        <div className="container top">
            <h1 className="text-center font-bold" id="sign" style={{color:"white"}}>Sign up</h1>
            <div className="container sign" id="body" >
                <center>
                    <br/><br/>
                <input type="email" className="text-center input" value={email}onChange={e=>setemail(e.target.value)} placeholder="Enter your email"></input>
                <br/>
                <p id="hideemail">Invalid Email </p>
                <input type="password" className="text-center input " value={password} onChange={e=>setpasword(e.target.value)} placeholder="Enter your password"></input>
                <br/>
                <p id="hidepassword">Invalid Password</p>
                <p id="hide">account created , please verify your email to signin</p>
                <p id="hideerr">Account already exist</p>
                <button className="but" onClick={login}>Sign up</button>
                <h5>or</h5>
                <h5 style={{marginBottom:"10px"}}><Link to="/ReactUrlShortner/">SignIn</Link></h5>
                <br/>
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
export default Signup;