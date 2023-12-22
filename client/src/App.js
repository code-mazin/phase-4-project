import { Link, Route, Switch } from "react-router-dom";
import Member from "./Member";
import Home from "./Home";

function App() {
  return (
    <main>
      <h1>
        <Link to="/">Family Reunion</Link>
      </h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/members/:id">
          <Member />
        </Route>
      </Switch>
    </main>
  )
}

export default App;
