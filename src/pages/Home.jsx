import React from "react";
import GrayCard from "../components/GrayCard";
import pinIcon from "../assets/pin.svg";
import starIcon from "../assets/star.svg";
import BookmarkCard from "../components/BookmarkCard";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <div>
          <span className="font-bold text-lg">먹살먹죽 </span>
          <span className="font-bold text-sm">님의 밥친구</span>
        </div>
        <GrayCard className="h-32">a</GrayCard>
      </div>
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
        <GrayCard>a</GrayCard>
      </div>
    </div>
  );
};

export default Home;
