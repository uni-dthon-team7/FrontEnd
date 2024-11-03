import { Link, useNavigate } from "react-router-dom";
import backIcon from "../assets/back.svg";
import Step from "../components/Step";
import { useState } from "react";
import Button from "../components/Button";

const Recipe = () => {
  const [selectedOption, setSelectedOption] = useState("양파");

  const navigate = useNavigate();

  return (
    <div className="relative">
      <Link to="/">
        <img src={backIcon} className="absolute left-0 top-1"></img>
      </Link>
      <div className="font-bold text-lg w-full text-center mb-4">
        레시피 만들기
      </div>
      <img
        src="https://recipe1.ezmember.co.kr/cache/recipe/2019/07/16/5e0cc17514ab766b63cede896813fc731.jpg"
        alt="recipe"
        className="w-full h-24 object-cover mb-2 rounded-md"
      />
      <div className="font-semibold w-full text-center">양파 소고기 볶음</div>
      <div className="text-sm flex items-center gap-2 justify-center">
        <span className="text-[#ACACAC]">백종원 님</span>
        <div className="flex items-center text-[#ACACAC]">
          <img className="w-3 h-3" src="/src/assets/share.png" />
          18
        </div>
        <span>(15분)</span>
      </div>
      <hr className="mt-1 mb-2" />
      <Step
        image="https://recipe1.ezmember.co.kr/cache/recipe/2019/07/16/5e0cc17514ab766b63cede896813fc731.jpg"
        title="1. 재료를 준비합니다."
        description="소고기, 양파, 소금, 후추, 식용유, 후라이팬을 준비합니다."
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <Step
        image="https://recipe1.ezmember.co.kr/cache/recipe/2019/07/16/5e0cc17514ab766b63cede896813fc731.jpg"
        title="2. 양파와 소고기를 준비합니다."
        description="양파를 채썰어주세요. 소고기는 먹기 좋은 크기로 썰어주세요."
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <Step
        image="https://recipe1.ezmember.co.kr/cache/recipe/2019/07/16/5e0cc17514ab766b63cede896813fc731.jpg"
        title="3. 양파를 볶아줍니다."
        description="후라이팬에 식용유를 두르고 양파를 투명해질 때까지 볶아줍니다."
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <Step
        image="https://recipe1.ezmember.co.kr/cache/recipe/2019/07/16/5e0cc17514ab766b63cede896813fc731.jpg"
        title="4. 소고기를 익혀줍니다."
        description="소고기를 넣고 중불에서 익혀줍니다."
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <Step
        image="https://recipe1.ezmember.co.kr/cache/recipe/2019/07/16/5e0cc17514ab766b63cede896813fc731.jpg"
        title="5. 간을 맞춰줍니다."
        description="소고기가 다 익었을 때 소금과 후추로 간을 맞춰줍니다. "
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      <div className="flex gap-3 fixed bottom-0 right-0 w-full z-10 bg-white py-2 px-[1.3rem]">
        <Button onClick={() => navigate(`/step/1`)}>수정 완료</Button>
      </div>
    </div>
  );
};

export default Recipe;
