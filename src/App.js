import logo from "./logo.svg";
import "./App.css";
import TreasureForm from "./components/TreasureForm";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
import TreasureList from "./components/TreasureList";
import { Route, Switch } from "react-router";
import TrashList from "./components/TrashList";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  const loading = useSelector((state) => state.loading);

  // if (loading) return <Loading />;
  return (
    <Switch>
      <Route path="/signin">
        <div className="rectangle">
          <p className="title">Sign in</p>
          <Signin />
        </div>
      </Route>
      <Route path="/signup">
        <div className="rectangle">
          <p className="title">Sign up</p>
          <Signup />
        </div>
      </Route>
      <Route path="/treasure">
        <div className="rectangle">
          <p className="title">Treasure list</p>
          <TreasureList />
        </div>
      </Route>
      <Route path="/trash">
        <div className="rectangle">
          <p className="title">Trash list</p>
          <TrashList />
        </div>
      </Route>
      <Home />
    </Switch>
  );
}

export default App;
