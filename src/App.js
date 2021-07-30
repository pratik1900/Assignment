import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import UserDetails from "./pages/user-details";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users-details/:id">
          <UserDetails />
        </Route>
        <Route exact={true} path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
