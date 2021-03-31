import axios from './axios';
import {useState} from 'react';
import {auth} from './firebase.js';
import './dashboard.css';
const Dashboard = ()=>{
    const [data , setdata] = useState([]);
    const [flag , setflag]  = useState(true);
    const [dash , setdash]  = useState("Load Dashboard");

    const Fetchdata = ()=>{
        setdash("Loading...");
        document.getElementById('butt').style.display = "none";

        axios.post("/dashboard" , {
            user : auth.currentUser.email
        }).then((res)=>{
            var value = res.data;
            setflag(false);
            value.forEach(element => {
               setdata(arr => [...arr,element._id]);
            });
        }).catch((err)=>{
            document.getElementById('butt').style.display = "block";
            setdash("Load Dashboard");
            alert(err);
        })
    }
    
    
    return (
        <div className="container">
            <button id="butt" className="loadbut" onClick={Fetchdata}>{dash}</button>
            
        {
            data.map(res=>(
                <div className="links">
                    <p className="badge text-wrap "><a href={"https://cgcshrt.herokuapp.com/" + res}>{"https://cgcshrt.herokuapp.com/" + res}</a></p>
                </div>
            ))
        }
        </div>
    );
}
export default Dashboard;