import logo from './logo.svg';
import './App.css';

import{
  BrowserRouter as Router,
  Route,
  Switch

}from 'react-router-dom'
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import ServicesPage from './containers/ServicesPage';
import CareersPage from './containers/CareersPage';
import ContactPage from './containers/ContactPage';
import RegisterForm from './RegistrationForm';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route exact path = '/' component={HomePage}/>
          <Route path='/about' component={AboutPage}/>
          <Route path ='/services' component={ServicesPage}/>
          <Route path='/careers' component={CareersPage}/>
          <Route path='/contact' component={ContactPage}/>
          </Switch>

      </Router>
       */}
       <RegisterForm/>
    </div>
  );
}

export default App;
