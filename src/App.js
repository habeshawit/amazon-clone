import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Login from "./Login";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/"> 
            <Header />  
            <Home /> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
