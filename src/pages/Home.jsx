import React from "react";
import GrayCard from "../components/GrayCard";
import pinIcon from "../assets/pin.svg";
import starIcon from "../assets/star.svg";
import BookmarkCard from "../components/BookmarkCard";
import Button from "../components/Button";
import WhiteCard from "../components/WhiteCard";
import ToolIcon from "../assets/cooktop.svg";
import GroceryIcon from "../assets/grocery.svg";
import { Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import { ingredients, tools } from "../const";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <div className="mb-2">
          <span className="font-bold text-lg">먹살먹죽 </span>
          <span className="font-bold text-sm">님의 밥친구</span>
        </div>
        <CharacterCard />
      </div>
      <hr />
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <img src={pinIcon} alt="pin" className="w-4 h-4" />
          <div className="font-bold text-lg">즐겨찾기 레시피</div>
        </div>
        <BookmarkCard />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <img src={starIcon} alt="star" className="w-4 h-4" />
          <div className="font-bold text-lg">자주 쓰는</div>
        </div>
        <GrayCard className="flex flex-col items-center pb-2 pt-4 mb-2">
          <div className="flex items-center gap-2">
            <div className="flex flex-col justify-center items-center h-full">
              <img src={GroceryIcon} className="h-6 w-6" />
              <div className="text-sm font-semibold whitespace-nowrap shrink-0 mx-2">
                재료
              </div>
            </div>
            <div className="flex overflow-x-scroll pb-2 gap-2 w-[70vw] shrink-0">
              {ingredients.map((ingredient) => (
                <WhiteCard
                  image={ingredient.image}
                  name={ingredient.name}
                  count={ingredient.count}
                />
              ))}
            </div>
          </div>
          <hr className="w-11/12 my-2" />
          <div className="flex items-center gap-2">
            <div className="flex flex-col justify-center items-center h-full">
              <img src={ToolIcon} className="h-6 w-6" />
              <div className="text-sm font-semibold whitespace-nowrap shrink-0 mx-2">
                도구
              </div>
            </div>
            <div className="flex overflow-x-scroll pb-2 gap-2 w-[70vw] shrink-0">
              {tools.map((tool) => (
                <WhiteCard
                  image={tool.image}
                  name={tool.name}
                  count={tool.count}
                />
              ))}
            </div>
          </div>
        </GrayCard>
        <Link to="/cook">
          <Button>요리 만들기</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
