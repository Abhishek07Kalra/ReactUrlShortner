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
      <Route exact path="/ReactUrlShortner/"><SignIn myfunction={myfunction} /></Route>
      <Route exact path="/ReactUrlShortner/signup"><Signup myfunction={myfunction} /></Route>
    </Router>
    
    
  );
}

export default App;