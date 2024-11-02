import React from "react";
import GrayCard from "../components/GrayCard";
import pinIcon from "../assets/pin.svg";
import starIcon from "../assets/star.svg";
import BookmarkCard from "../components/BookmarkCard";
import Button from "../components/Button";
import WhiteCard from "../components/WhiteCard";

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
        <GrayCard className="flex flex-col items-center pb-2 pt-4 mb-2">
          <div className="flex items-start gap-2">
            <div className="text-sm font-semibold whitespace-nowrap shrink-0 mx-2">
              재료
            </div>
            <div className="flex overflow-x-scroll pb-2 gap-2 w-[70vw] shrink-0">
              <WhiteCard
                image="https://jhealthfile.joins.com/photo//2020/11/26/1343ea624b4b3.jpg"
                name="계란"
                count={10}
              />
              <WhiteCard
                image="https://jhealthfile.joins.com/photo//2020/11/26/1343ea624b4b3.jpg"
                name="계란"
                count={10}
              />
              <WhiteCard
                image="https://jhealthfile.joins.com/photo//2020/11/26/1343ea624b4b3.jpg"
                name="계란"
                count={10}
              />
              <WhiteCard
                image="https://jhealthfile.joins.com/photo//2020/11/26/1343ea624b4b3.jpg"
                name="계란"
                count={10}
              />
            </div>
          </div>
          <hr className="w-11/12 my-2" />
          <div className="flex items-start gap-2">
            <div className="text-sm font-semibold whitespace-nowrap shrink-0 mx-2">
              도구
            </div>
            <div className="flex overflow-x-scroll pb-2 gap-2 w-[70vw] shrink-0">
              <WhiteCard
                image="https://i.namu.wiki/i/i5243NP2bqgURInYNRZ8nwehqJbLDoH0PCppza08BxRl5zcmh2x34n4qMsGVJCMDlyjuSct5MUU0T8w9Cs33YQ.webp"
                name="손"
                count={10}
              />
              <WhiteCard
                image="https://i.namu.wiki/i/i5243NP2bqgURInYNRZ8nwehqJbLDoH0PCppza08BxRl5zcmh2x34n4qMsGVJCMDlyjuSct5MUU0T8w9Cs33YQ.webp"
                name="손"
                count={10}
              />
              <WhiteCard
                image="https://i.namu.wiki/i/i5243NP2bqgURInYNRZ8nwehqJbLDoH0PCppza08BxRl5zcmh2x34n4qMsGVJCMDlyjuSct5MUU0T8w9Cs33YQ.webp"
                name="손"
                count={10}
              />
              <WhiteCard
                image="https://i.namu.wiki/i/i5243NP2bqgURInYNRZ8nwehqJbLDoH0PCppza08BxRl5zcmh2x34n4qMsGVJCMDlyjuSct5MUU0T8w9Cs33YQ.webp"
                name="손"
                count={10}
              />
            </div>
          </div>
        </GrayCard>
        <Button>요리 만들기</Button>
      </div>
    </div>
  );
};

export default Home;
