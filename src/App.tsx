import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoardScreen from "./containers/Dashboard";
import Project from "./containers/Projects";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <DashBoardScreen />
          </Route>
          <Route exact path="/dashboard">
            <DashBoardScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
