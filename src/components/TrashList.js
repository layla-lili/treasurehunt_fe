import { useSelector } from "react-redux";
import Treasure from "./Treasure";

const TrashList = () => {
  const trashes = useSelector((state) => state.trashReducer.trashes);

  const trashList = trashes.map((trash) => (
    <Treasure key={trash.id} treasure={trash} />
  ));
  return <div>{trashList}</div>;
};

export default TrashList;
