import logo from "./logo.svg";
import "./App.css";
import TreasureForm from "./components/TreasureForm";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
import TreasureList from "./components/TreasureList";
import { Route, Switch } from "react-router";
import TrashList from "./components/TrashList";
import Home from "./components/Home";

function App() {
  const loading = useSelector((state) => state.loading);

  // if (loading) return <Loading />;
  return (
    <Switch>
      <Route path="/treasure">
        <div className="rectangle">
          <p className="title">TreasureForm</p>
          <TreasureList />
        </div>
      </Route>
      <Route path="/trash">
        <div className="rectangle">
          <p className="title">TreasureForm</p>
          <TrashList />
        </div>
      </Route>
      <Home />
    </Switch>
  );
}

export default App;
