import { useEffect, useState } from "react";
import GrayCard from "./GrayCard";

const CharacterCard = ({ hasBab, exp, setExp }) => {
  const [bap, setBap] = useState(hasBab ? 80 : 0);
  const [bapCount, setBapCount] = useState(0);
  const [level, setLevel] = useState(1);
  const [maxExp, setMaxExp] = useState(100);
  const [egg, setEgg] = useState(hasBab ? 2 : 0);

  const handleBapClick = () => {
    if (egg) {
      setEgg(egg - 1);
      setBapCount(bapCount + 1);
      setExp(exp + 30);
      return;
    }
    if (bap >= 20) {
      setBap(bap - 20);
      setBapCount(bapCount + 1);
      setExp(exp + 20);
    }
  };

  useEffect(() => {
    calculateLevel(exp);
  }, [exp]);

  const calculateLevel = (exp) => {
    let level = 1;
    let maxExp = 100;
    while (exp >= maxExp) {
      exp -= maxExp;
      level += 1;
      maxExp = level * 100;
    }
    setLevel(level);
    setMaxExp(maxExp);
  };

  return (
    <div className="flex gap-4">
      <div className="bg-[#FEF7E0] rounded-md shadow-custom pr-3 shrink-0 relative pt-3">
        <img
          src={`/src/assets/jabu${bapCount > 3 ? 3 : bapCount}.png`}
          alt="jabu"
          className="w-32"
        />
        {bapCount < 2 && (
          <img
            className="absolute w-32 top-0"
            src="/src/assets/meat.png"
            alt="meat"
          />
        )}
        <div className="absolute top-4 right-2 bg-[#F2843B] p-1.5 rounded shadow-custom">
          <img src="/src/assets/chart.svg" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <GrayCard className="px-3 py-3">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold text-[#F2843B] mr-1 text-sm">
                Lv. {level}
              </span>
              <span className="font-bold text-sm">초급요리사</span>
            </div>
            <span className="text-xs">
              ({exp}/{maxExp})
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div
              className="bg-[#F2843B] h-2.5 rounded-full"
              style={{ width: `${(exp / maxExp) * 100}%` }}
            ></div>
          </div>
        </GrayCard>
        <div className="border flex-grow rounded-md flex p-2 relative">
          {egg > 0 &&
            (egg === 1 ? (
              <img
                src="/src/assets/bonus_egg.png"
                className="absolute left-10"
              />
            ) : (
              <img
                src="/src/assets/bonus_egg2.png"
                className="absolute left-8 top-0"
              />
            ))}
          <img
            src={`/src/assets/bap${bap / 20}.png`}
            alt="bab"
            className="ml-6 w-14"
          />
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
