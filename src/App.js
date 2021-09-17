import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Login from "./Login";
import Header from "./Header";
import { useEffect } from "react";
import { auth } from "./firebase";

// import firebase from 'firebase'
// require('firebase/auth')
import { useStateValue } from "./StateProvider";

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  

  
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
