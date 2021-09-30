import './signup.css';
import {auth} from './firebase';
import {useState} from 'react';
import {Link} from 'react-router-dom';
const Reset = ()=>{
    const [email , setemail] = useState("");
    const reset = ()=>{
        auth.sendPasswordResetEmail(email).then(()=>{
            document.getElementById('hide').style.display = "block"
            setTimeout(()=>{
                document.getElementById('hide').style.display = "none"
            } , 5000)
        }).catch(err=>{
            if(err.code === "auth/user-not-found"){
            document.getElementById('hideerr').style.display = "block"
            setTimeout(()=>{
                document.getElementById('hideerr').style.display = "none"
            } , 5000)
        }
            else
            alert(err.message);
        })
    };
    return (
      <div className="container top">
        <h1 className="text-center font-bold" style={{ color: "white" }}>
          Forget Password
        </h1>
        <div className="container sign1">
          <center>
            <br />
            <br />
            <input
              type="email"
              className="text-center input"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter your email"
            ></input>
            <br />
            <p id="hide">Reset link sent to your email</p>
            <p id="hideerr">No account link to this email address</p>
            <button className="but" onClick={reset}>
              Reset
            </button>
            <br />
            <h5>or</h5>
            <h5 className="resetlink" style={{ marginBottom: "10px" }}>
              <Link to="/ReactUrlShortner/">SignIn</Link>
            </h5>
            <br />
          </center>
        </div>
      </div>
    );
}
export default Reset;