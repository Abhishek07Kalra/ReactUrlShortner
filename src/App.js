import InputBar from './InputBar';
import {auth}  from './firebase';
import SignIn from './SignIn';
import Reset from './reset';
import Signup from './signup';
import Loader from './loader';
import {useAuthState} from 'react-firebase-hooks/auth';
import {BrowserRouter as Router , Route} from 'react-router-dom';
function App() {
  const [user , loading] = useAuthState(auth);

  return (
    loading ? 
    <Loader/>
    :
    user ? 
    <InputBar/>
    :
    <Router>
      <Route exact path="/ReactUrlShortner/"><SignIn/></Route>
      <Route exact path="/ReactUrlShortner/signup"><Signup/></Route>
      <Route exact path="/ReactUrlShortner/reset"><Reset/></Route>
    </Router>
    
    
  );
}

export default App;
