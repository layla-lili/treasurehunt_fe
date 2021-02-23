import { Title } from "../styles";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Title>Treasure Hunt</Title>
    </>
  );
};

export default Home;
