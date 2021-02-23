import { useSelector } from "react-redux";
import Treasure from "./Treasure";

const TreasureList = () => {
  const treasures = useSelector((state) => state.treasureReducer.treasures);

  const treasureList = treasures.map((treasure) => (
    <Treasure key={treasure.id} treasure={treasure} />
  ));
  return <div>{treasureList}</div>;
};

export default TreasureList;
