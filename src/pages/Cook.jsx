import { Link } from "react-router-dom";
import backIcon from "../assets/back.svg";

const Cook = () => {
  return (
    <div className="relative flex">
      <Link to="/">
        <img
          onClick={() => navigate(-1)}
          src={backIcon}
          className="absolute left-0 top-1"
        ></img>
      </Link>
      <div className="font-bold text-lg w-full text-center">요리 만들기</div>
    </div>
  );
};

export default Cook;
