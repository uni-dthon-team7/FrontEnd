import { Link } from "react-router-dom";
import backIcon from "../assets/back.svg";
import React from "react";
import GrayCard from "../components/GrayCard";
import WhiteCard from "../components/WhiteCard";
import ToolIcon from "../assets/cooktop.svg";
import GroceryIcon from "../assets/grocery.svg";
import RecipeCard from "../components/RecipeCard";

const Cook = () => {
  const recipes1 = [
    {
      name: "간계밥",
      user: "백종원",
      used: 10,
      time: 30,
      mainIngredient: "계란",
      subIngredient: "대파",
      image: "/src/assets/간계밥.png",
      matchRate: 86,
    },
    {
      name: "간계밥",
      user: "백종원",
      used: 10,
      time: 30,
      mainIngredient: "계란",
      subIngredient: "대파",
      image: "/src/assets/간계밥.png",
      matchRate: 86,
    },
  ];

  const recipes2 = [
    {
      name: "간계밥",
      user: "백종원",
      used: 10,
      time: 30,
      mainIngredient: "계란",
      subIngredient: "대파",
      image: "/src/assets/간계밥.png",
      matchRate: 86,
    },
    {
      name: "간계밥",
      user: "백종원",
      used: 10,
      time: 30,
      mainIngredient: "계란",
      subIngredient: "대파",
      image: "/src/assets/간계밥.png",
      matchRate: 86,
    },
  ];

  return (
    <div className="relative flex flex-col">
      <Link to="/">
        <img
          src={backIcon}
          className="absolute left-0 top-1"
        ></img>
      </Link>
      <div className="font-bold text-lg w-full text-center mb-4">
        요리 만들기
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
            <WhiteCard
              image="https://jhealthfile.joins.com/photo//2020/11/26/1343ea624b4b3.jpg"
              name="계란"
              imgSize="small"
            />
            <WhiteCard
              image="https://jhealthfile.joins.com/photo//2020/11/26/1343ea624b4b3.jpg"
              name="계란"
              imgSize="small"
            />
            <WhiteCard
              image="https://jhealthfile.joins.com/photo//2020/11/26/1343ea624b4b3.jpg"
              name="계란"
              imgSize="small"
            />
            <WhiteCard
              image="https://jhealthfile.joins.com/photo//2020/11/26/1343ea624b4b3.jpg"
              name="계란"
              imgSize="small"
            />
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
            <WhiteCard
              image="https://i.namu.wiki/i/i5243NP2bqgURInYNRZ8nwehqJbLDoH0PCppza08BxRl5zcmh2x34n4qMsGVJCMDlyjuSct5MUU0T8w9Cs33YQ.webp"
              name="손"
              imgSize="small"
            />
            <WhiteCard
              image="https://i.namu.wiki/i/i5243NP2bqgURInYNRZ8nwehqJbLDoH0PCppza08BxRl5zcmh2x34n4qMsGVJCMDlyjuSct5MUU0T8w9Cs33YQ.webp"
              name="손"
              imgSize="small"
            />
            <WhiteCard
              image="https://i.namu.wiki/i/i5243NP2bqgURInYNRZ8nwehqJbLDoH0PCppza08BxRl5zcmh2x34n4qMsGVJCMDlyjuSct5MUU0T8w9Cs33YQ.webp"
              name="손"
              imgSize="small"
            />
            <WhiteCard
              image="https://i.namu.wiki/i/i5243NP2bqgURInYNRZ8nwehqJbLDoH0PCppza08BxRl5zcmh2x34n4qMsGVJCMDlyjuSct5MUU0T8w9Cs33YQ.webp"
              name="손"
              imgSize="small"
            />
          </div>
        </div>
      </GrayCard>

      <div className="font-bold text-lg w-full mb-1">재료 우선</div>
      <GrayCard className="flex gap-3 py-2 px-3 overflow-x-auto flex-nowrap mb-2">
        {recipes1.map((recipe) => (
          <RecipeCard recipe={recipe} color="orange" />
        ))}
      </GrayCard>
      <div className="font-bold text-lg w-full mb-1">도구 우선</div>
      <GrayCard className="flex gap-3 py-2 px-3 overflow-x-auto flex-nowrap mb-2">
        {recipes2.map((recipe) => (
          <RecipeCard recipe={recipe} color="yellow" />
        ))}
      </GrayCard>
    </div>
  );
};

export default Cook;
