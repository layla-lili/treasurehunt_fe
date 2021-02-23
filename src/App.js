import logo from "./logo.svg";
import "./App.css";
import TreasureForm from "./components/TreasureForm";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";

function App() {
  const loading = useSelector((state) => state.loading);

  // if (loading) return <Loading />;
  return (
    <div className="rectangle">
      <p className="title">TreasureForm</p>
      <TreasureForm />
    </div>
  );
}

export default App;
