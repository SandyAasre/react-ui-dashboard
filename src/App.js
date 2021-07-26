import "./App.css";
import { Login } from "./component/Login/Login";
import { Home } from "./component/Home/Home";
import { BrowserRouter,Switch, Route, } from "react-router-dom";
import EhrLogin from "./component/EhrLogin/EhrLogin";
import {Calender} from './component/Calender/Calender';
import People from "./Pages/People/People";
import { OgilyHome } from "./component/Home/OgliyHome";
import Router from "./Routes";
function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route path="/home" component={Home}/>
       <Route path="/ogily-home" component={OgilyHome}/>
       <Route path="/EHR-login"  component={EhrLogin}/>
       <Route path="/Calender" exact component={Calender}/>
       <Route path="/People/:id"  component={People} />
       <Route path="/" exact component={Login}/>
       <Router/>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
