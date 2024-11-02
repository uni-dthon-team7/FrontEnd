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

const Home = () => {
  const ingredients = [
    {
      name: "계란",
      count: 15,
      image:
        "https://jhealthfile.joins.com/photo//2020/11/26/1343ea624b4b3.jpg",
    },
    {
      name: "소금",
      count: 13,
      image:
        "https://static.wtable.co.kr/image/production/service/kitchenguidecontent/63010/9ed2c6fb-a9ad-4d72-a52f-49886b6b5430.jpg",
    },
    {
      name: "후추",
      count: 8,
      image:
        "https://img.danawa.com/prod_img/500000/038/789/img/2789038_1.jpg?_v=20161108190618",
    },
    {
      name: "양파",
      count: 5,
      image:
        "https://cdn.kormedi.com/wp-content/uploads/2022/07/gettyimages-1312497207.jpg",
    },
    {
      name: "조미김",
      count: 3,
      image:
        "https://www.kribbon.kr/usr/upload/board/zboardphotogallery157/20160610014155620_3707.0.png",
    },
    {
      name: "간장",
      count: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Soy_sauce_2.jpg/640px-Soy_sauce_2.jpg",
    },
    {
      name: "대파",
      count: 2,
      image:
        "https://www.nongmin.com/-/raw/srv-nongmin/data2/content/image/2017/08/29/.cache/512/20170829129799.jpg",
    },
  ];

  const tools = [
    {
      name: "손",
      count: 22,
      image:
        "https://i.namu.wiki/i/i5243NP2bqgURInYNRZ8nwehqJbLDoH0PCppza08BxRl5zcmh2x34n4qMsGVJCMDlyjuSct5MUU0T8w9Cs33YQ.webp",
    },
    {
      name: "후라이팬",
      count: 10,
      image:
        "https://800c.co.kr/web/product/big/202212/beb813d639adcb996f7d9086bf9078cb.jpg",
    },
    {
      name: "냄비",
      count: 8,
      image:
        "https://m.etlandmall.co.kr/nas/cdn/attach/product/2023/10/23/B0385499/B0385499_6_600.jpg",
    },
  ];

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
