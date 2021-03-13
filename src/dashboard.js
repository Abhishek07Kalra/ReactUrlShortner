import axios from './axios';
import React from 'react';
import auth from './firebase';
import {useState , useEffect} from 'react';
function Dashboard()
{
    var [objj , setobj] = useState([]);
    var obj = [];
    var data = [];
   const load  = ()=>{
        axios.post("/dashboard" , {
            user : "abhi@gmail.com"
        }).then((res)=>{
            if(res){
                console.log(res.data);
                var temp =  res.data;
                
                
            }
        }).catch((err)=>{
            alert(err);
        })
    }
    return(
        <div>
            <h1 onClick={load}>click me</h1>
            {
                obj.map((element)=>(
                    <h1 style={{color:"red"}}>{element}</h1>
                ))
                   
            }
            
        </div>
        
    );
}
const Track = ()=>{
    return(
        <h1 style={{color:"red"}}></h1>
    );
}
export default Dashboard;