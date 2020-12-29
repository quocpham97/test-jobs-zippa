import { Switch, Route, Redirect, Router } from "react-router-dom";
import Job from "./components/Job";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/test/jobs/"} component={Job} />
        <Redirect from="*" to="/test/jobs/" />
      </Switch>
    </Router>
    // <div className="App">
    //   <Job />
    // </div>
  );
}

export default App;
