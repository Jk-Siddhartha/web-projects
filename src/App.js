import Homepage from "./Components/Homepage";
import About from "./Components/Navbar/About";
import Contact from "./Components/Navbar/Contact";
import Login from "./Components/Navbar/Login";
import Register from "./Components/Navbar/Register";
import Service from "./Components/Navbar/Service";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/about" component={About} exact />
          <Route path="/service" component={Service} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
