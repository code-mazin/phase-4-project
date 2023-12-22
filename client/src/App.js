import { Link, Route, Router, Switch } from "react-router-dom";
import Member from "./Member";
import Home from "./Home";

function App() {
  return (
    <main><Router>
      <Route><h1>
        <Link to="/">Family Reunion</Link>
      </h1>
      </Route>
      </Router>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/members/:id">
          <Member />
        </Route>
      </Switch>
      </Router>
    </main>
  )
}

export default App;
