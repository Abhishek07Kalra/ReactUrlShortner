import './inputBar.css';
import axios from './axios';
import {useState } from 'react';
function InputBar() {
 const [data , setdata] = useState("");
 const [inputValue , setinput] = useState("");
 function click()
 {
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
     short : link
    }).then(response=>{
       setdata(response.data);
       setinput("");
    }).catch(err=>{
      setdata("");
      alert(err);
    })

 }
  return (
      <div className='hello'>
        <center>
        <input type="text" className="inputbar" placeholder="Enter Your Link Here" value={inputValue} onChange={e => setinput(e.target.value)}></input>
        &nbsp;&nbsp;&nbsp;
        <button onClick={click}>Create</button>
        <br/><br/>
        <h2 className="linkaddress"><a href={data} target="blank">{data}</a></h2>
        </center>
      </div>
  );
}
export default InputBar;
