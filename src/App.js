import './App.css';
import Home from './Home';
import Login from './Login';
import UpdateTask from './UpdateTask';
import Notfound from './Notfound';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Create from './create';
import SignUp from './SignUp';
import Forgotpassword from './Forgotpassword';
function App() {
  return (
    <Router>
      <div className="App container">
      <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route path='/Home'>
            <Home/>
          </Route>
          <Route path='/manage/:id/:uid'>
            <UpdateTask/>
          </Route>
          <Route path='/Create'>
            <Create/>
          </Route>
          <Route path='/SignUp'>
            <SignUp/>
          </Route>
          <Route path='/Forgotpassword'>
            <Forgotpassword/>
          </Route>
          <Route path='*'>
            <Notfound/>
          </Route>
        </Switch>

      </div>

    </Router>   
    
  );
}

export default App;
