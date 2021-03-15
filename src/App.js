import InputBar from './InputBar';
import Auth  from './firebase';
import {useState} from 'react';
import SignIn from './SignIn';
import Reset from './reset';
import Signup from './signup';
import Loader from './loader';
import {BrowserRouter as Router , Route} from 'react-router-dom';
function App() {
  const [user , setuser] = useState(Auth.currentUser || null);
  const [loading , setloading] = useState(true);
  const myfunction = (curruser)=>{
      setuser(curruser);
  }
    Auth.onAuthStateChanged(async userAuth => {
      if(userAuth && userAuth.emailVerified){
        await setuser(Auth.currentUser);
      }
      
    });
    const loadingdata = ()=>{
      setTimeout(()=>{
        setloading(false);
      },2000);
        
    }
  return (
    loading ? 
    <Loader loading={loadingdata}/>
    :
    user ? 
    <InputBar myfunction={myfunction}/>
    
    :
    <Router>
      <Route exact path="/ReactUrlShortner/"><SignIn myfunction={myfunction} /></Route>
      <Route exact path="/ReactUrlShortner/signup"><Signup myfunction={myfunction} /></Route>
      <Route exact path="/ReactUrlShortner/reset"><Reset/></Route>
    </Router>
    
    
  );
}

export default App;
