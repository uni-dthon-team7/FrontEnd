import GrayCard from "./GrayCard";

const CharacterCard = ({ character }) => {
  return (
    <div className="flex gap-4">
      <div className="bg-[#FEF7E0] rounded-md shadow-custom pr-3 shrink-0 relative">
        <img src="/src/assets/jabu.png" alt="jabu" className="w-32" />
        <img
          className="absolute w-32 top-0"
          src="/src/assets/meat.png"
          alt="meat"
        />
        <div className="absolute top-2 right-2 bg-[#F2843B] p-1.5 rounded shadow-custom">
          <img src="/src/assets/chart.svg" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <GrayCard className="px-3 py-3">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold text-[#F2843B] mr-2 text-sm">
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
        <div className="border flex-grow rounded-md">
          {/* <img src="/src/assets/bab1.png" alt="bab" /> */}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
