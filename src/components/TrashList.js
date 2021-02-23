import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Treasure from "./Treasure";

const TrashList = () => {
  const trashes = useSelector((state) => state.trashReducer.trashes);

  const trashList = trashes.map((trash) => (
    <Treasure key={trash.id} treasure={trash} />
  ));
  return (
    <div>
      {trashList}
      <Link to="/">
        <button>Go back home</button>
      </Link>
    </div>
  );
};

export default TrashList;
