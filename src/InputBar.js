import './inputBar.css';
import axios from './axios';
import firebase from 'firebase';
import logo from "./LogoMakr-2gRYkr.png"
import {useState } from 'react';
import {auth}  from './firebase.js';
import publicIp from "public-ip";
import QRCode from "react-qr-code";
function InputBar() {
 const [data , setdata] = useState("");
 const [copy , setcopy] = useState("Copy");
 const [inputValue , setinput] = useState("");
 
 async function click(){
  const protocol = await publicIp.v4();
   var boolvalue = false;
   var password;
   var original;
   if((inputValue === "") || ((!inputValue.includes(".")) && (!inputValue.includes("url")))){
    alert("Invalid Input");
    return;
  }
    if(inputValue === "url"){
     password = prompt("Enter your password");
     original = prompt("Enter your original link");
     var link = prompt("Enter your short link");
     setinput(original);
     boolvalue = true;
    }
    setdata("Please Wait...")
    axios.post('/addurl' , {
     originalUrl : inputValue==="url" ? original: inputValue ,
     passcode : boolvalue,
     pass : password,
     short : link,
     userip : protocol,
     user : auth.currentUser.email ? auth.currentUser.email : "anonymous",
     date: firebase.firestore.Timestamp.now().toDate().toString()
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
  auth.signOut();
}
  return (
    <div>
      <div className="navbar">
        <div>
        <img src={logo} alt="img here"></img>
        </div>
        
        <button className="logout" onClick={logout}>
          {
          auth.currentUser ? auth.currentUser.email ? "Logout" : "Sign In" : "Sign In"
          }
        </button>
      </div>
      <div className='hello'>
        <center>
        <input type="text" className="inputbar" alt="can't display" placeholder="Enter Your Link Here" value={inputValue} onKeyDown={(e)=>e.key==="Enter" ? click() : 1 } onChange={e => setinput(e.target.value)}></input>
        &nbsp;&nbsp;&nbsp;
        <button onClick={click}>Create</button>
        <br/><br/>
        <p className="url" id="link">{data}</p>
        <br/>
        {
          data && data !== "Please Wait..." ?
          <button className="copybut text-center" onClick={copylink} style={{width:"80px" , marginTop:"-10px"}}>{copy}</button> 
          :
          <div></div>
          
        }
        <br/><br/><br/>
        {
          data && data !== "Please Wait..." ?
          <QRCode value={data} size="200" fgColor="#adff2f" bgColor="black"></QRCode>
          :
          <div></div>
        }
        </center>
      </div>
    </div>
   
  );
}
export default InputBar;
