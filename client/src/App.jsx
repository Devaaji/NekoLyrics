
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { useContext } from 'react';
import { Context } from './context/Context';



function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/login">{user ? <Home /> : <Login />}</Route>
      <Route path="/write">{user ? <Write /> : <Login />}</Route>
      <Route path="/post/:id">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
