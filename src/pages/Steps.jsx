import { Link } from "react-router-dom";
import backIcon from "../assets/back.svg";
import { useState } from "react";
import Step from "../components/Step";
import Button from "../components/Button";

const Steps = () => {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState("양파");
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const stepComponents = [
    <Step
      image="https://recipe1.ezmember.co.kr/cache/recipe/2019/07/16/5e0cc17514ab766b63cede896813fc731.jpg"
      title="1. 재료를 준비합니다."
      description="소고기, 양파, 소금, 후추, 식용유, 후라이팬을 준비합니다."
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
    />,
    <Step
      image="https://recipe1.ezmember.co.kr/cache/recipe/2019/07/16/5e0cc17514ab766b63cede896813fc731.jpg"
      title="2. 양파와 소고기를 준비합니다."
      description="양파를 채썰어주세요. 소고기는 먹기 좋은 크기로 썰어주세요."
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
    />,
    <Step
      image="https://recipe1.ezmember.co.kr/cache/recipe/2019/07/16/5e0cc17514ab766b63cede896813fc731.jpg"
      title="3. 양파를 볶아줍니다."
      description="후라이팬에 식용유를 두르고 양파를 투명해질 때까지 볶아줍니다."
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
    />,
    <Step
      image="https://recipe1.ezmember.co.kr/cache/recipe/2019/07/16/5e0cc17514ab766b63cede896813fc731.jpg"
      title="4. 소고기를 익혀줍니다."
      description="소고기를 넣고 중불에서 익혀줍니다."
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
    />,
    <Step
      image="https://recipe1.ezmember.co.kr/cache/recipe/2019/07/16/5e0cc17514ab766b63cede896813fc731.jpg"
      title="5. 간을 맞춰줍니다."
      description="소고기가 다 익었을 때 소금과 후추로 간을 맞춰줍니다. "
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
    />,
    <div className="mt-20">
      <div className="bg-[#FFF1EC] rounded-md border-[#F2843B] border font-semibold flex flex-col items-center relative pb-24">
        <img src="/src/assets/Group 48.png" className="absolute top-[-4rem]" />
        <div className="rounded-full bg-white shadow-custom block p-2 px-3 w-fit text-sm mb-3 mt-14">
          밥 <span className="text-[#F2843B] text-base">20g</span> 획득!
        </div>
        <div className="rounded-full bg-white shadow-custom block p-2 px-3 w-fit text-sm mb-3">
          <span className="text-[#F2843B] text-base">재료 절약</span> 계란
          후라이 + 1
        </div>
        <div className="rounded-full bg-white shadow-custom block p-2 px-3 w-fit text-sm mb-6">
          <span className="text-[#F2843B] text-base">뒷정리 완료</span> 계란
          후라이 + 1
        </div>
        설거지 업로드
        <div className="bg-white w-48 h-48 rounded-md flex items-center justify-center cursor-pointer mt-1">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <span>사진 업로드</span>
          )}
          <input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleFileChange}
          />
        </div>
        <img
          src="/src/assets/jabu2.png"
          className="absolute w-56 h-56 bottom-[-4rem]"
        />
      </div>
    </div>,
  ];

  return (
    <div className="relative">
      <Link to="/">
        <img src={backIcon} className="absolute left-0 top-1"></img>
      </Link>
      <div className="font-bold text-lg w-full text-center mb-10">
        {step > 4 ? "~조리 완료~" : "양파 소고기 볶음 조리중"}
      </div>
      {stepComponents[step]}
      {step <= 4 && (
        <img src={`/src/assets/step${step}.png`} className="mt-10" />
      )}

      <div className="flex gap-3 fixed bottom-0 right-0 w-full z-10 bg-white py-2 px-[1.3rem]">
        <Button
          onClick={() => {
            if (step < 5) {
              setStep(step + 1);
            }
          }}
        >
          단계 완료
        </Button>
      </div>
    </div>
  );
};

export default Steps;
