import InputBar from './InputBar';
import  './App.css';
import Auth  from './firebase';
import {useState} from 'react';
import SignIn from './SignIn';
import Signup from './signup';
import {BrowserRouter as Router , Route} from 'react-router-dom';
function App() {
  const [user , setuser] = useState(Auth.currentUser || null);
  const myfunction = (curruser)=>{
      setuser(curruser);
  }
    Auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        setuser(Auth.currentUser);
      }
    });

  return (
    user ? 
    <InputBar myfunction={myfunction}/>
    
    :
    <Router>
      <Route exact path="/"><SignIn myfunction={myfunction} /></Route>
      <Route exact path="/signup"><Signup myfunction={myfunction} /></Route>
      {/* <Route exact path="/dashboard"><Dashboard/></Route> */}
    </Router>
    
    
  );
}

export default App;
