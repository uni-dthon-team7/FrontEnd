import { useState } from "react";
import GrayCard from "./GrayCard";

const CharacterCard = ({ hasBab }) => {
  const [bap, setBap] = useState(hasBab ? 80 : 0);

  const handleBapClick = () => {
    setBap((prev) => (prev >= 20 ? prev - 20 : 0));
  };

  return (
    <div className="flex gap-4">
      <div className="bg-[#FEF7E0] rounded-md shadow-custom pr-3 shrink-0 relative pt-3">
        <img src="/src/assets/jabu.png" alt="jabu" className="w-32" />
        <img
          className="absolute w-32 top-0"
          src="/src/assets/meat.png"
          alt="meat"
        />
        <div className="absolute top-4 right-2 bg-[#F2843B] p-1.5 rounded shadow-custom">
          <img src="/src/assets/chart.svg" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <GrayCard className="px-3 py-3">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold text-[#F2843B] mr-1 text-sm">
                Lv. 17
              </span>
              <span className="font-bold text-sm">중급요리사</span>
            </div>
            <span className="text-xs ">(30/100)</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div
              className="bg-[#F2843B] h-2.5 rounded-full"
              style={{ width: "30%" }}
            ></div>
          </div>
        </GrayCard>
        <div className="border flex-grow rounded-md flex p-2">
          <img src="/src/assets/bap0.png" alt="bab" className="ml-6 w-14" />
          <div className="rounded-full font-bold bg-[#F2843B] shadow-custom w-14 h-14 flex justify-center items-center ml-6 text-white text-sm flex-col">
            밥 주기
            <br />
            <span
              className="text-[10px] whitespace-nowrap -m-1"
              onClick={() => handleBapClick()}
            >
              {bap}/100g
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
