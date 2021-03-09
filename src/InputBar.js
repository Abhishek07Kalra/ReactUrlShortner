import './inputBar.css';
import axios from './axios';
import {useState , useEffect} from 'react';
function InputBar() {
 const [data , setdata] = useState("");
 const [inputValue , setinput] = useState("");
 function click()
 {
   if(inputValue == "" || !inputValue.includes(".")){
     alert("Invalid Input");
     return;
   }
   setdata("Please Wait...")
   axios.post('/addurl' , {
    originalUrl : inputValue
   }).then(response=>{
      setdata(response.data);
      setinput("");
   }).catch(err=>{
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
        <h2 className="linkaddress">{data}</h2>
        </center>
      </div>
  );
}
export default InputBar;
