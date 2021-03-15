import './inputBar.css';
import axios from './axios';
import logo from "./LogoMakr-2gRYkr.png"
import {useState } from 'react';
import Auth  from './firebase.js';
import publicIp from "public-ip";
function InputBar({myfunction}) {
 const [data , setdata] = useState("");
 const [copy , setcopy] = useState("Copy");
 const [inputValue , setinput] = useState("");
 async function click()
 {
  const protocol = await publicIp.v4();
   var boolvalue = false;
   var password;
   var original;
   if((inputValue === "") || ((!inputValue.includes(".")) && (!inputValue.includes("myshorturl")))){
    alert("Invalid Input");
    return;
  }
    if(inputValue === "myshorturl"){
     password = prompt("Enter your password");
     original = prompt("Enter your original link");
     var link = prompt("Enter your short link");
     setinput(original);
     boolvalue = true;
    }
    setdata("Please Wait...")
    axios.post('/addurl' , {
     originalUrl : inputValue==="myshorturl" ? original: inputValue ,
     passcode : boolvalue,
     pass : password,
     short : link,
     userip : protocol,
     user : Auth.currentUser ? Auth.currentUser.email : "anonymous"
    }).then(response=>{
       setdata(response.data);
       setinput("");
    }).catch(err=>{
      setdata("");
      alert(err);
    })

 }

 const copylink = ()=>{
  var textField = document.createElement('textarea')
  textField.innerText = data
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
  setcopy("Done");
  setTimeout(()=>{
    setcopy("Copy"); 
  },3000)

 }

function logout(){
  Auth.signOut();
  myfunction(null);
}
  return (
    <div>
      <div className="navbar">
        <div>
        <img src={logo} alt="img here"></img>
        </div>
        
        <button className="logout" onClick={logout}> Logout</button>
      </div>
      <div className='hello'>
        <center>
        {/* <br/><br/>
        <button></button><button></button>
        <br/><br/> */}
        <input type="text" className="inputbar" alt="can't display" placeholder="Enter Your Link Here" value={inputValue} onKeyDown={(e)=>e.key==="Enter" ? click() : 1 } onChange={e => setinput(e.target.value)}></input>
        &nbsp;&nbsp;&nbsp;
        <button onClick={click}>Create</button>
        <br/><br/>
        <p className="url" id="link">{data}</p>
        <br/>
        {
          data ? 
          <button  className="copybut text-center" onClick={copylink} style={{width:"80px" , marginTop:"-10px"}}>{copy}</button> :
          <div></div>
        }
        </center>
      </div>
    </div>
  );
}
export default InputBar;
