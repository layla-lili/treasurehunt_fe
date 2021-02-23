import { useSelector } from "react-redux";
import Treasure from "./Treasure";
import { Link } from "react-router-dom";

const TreasureList = () => {
  const treasures = useSelector((state) => state.treasureReducer.treasures);

  const treasureList = treasures.map((treasure) => (
    <Treasure key={treasure.id} treasure={treasure} />
  ));
  return (
    <div>
      {treasureList}
      <Link to="/">
        <button>Go back home</button>
      </Link>
    </div>
  );
};

export default TreasureList;
