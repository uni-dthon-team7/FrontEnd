import { useState } from "react";

const WhiteCard = ({
  children,
  className,
  image,
  name,
  count,
  imgSize,
  isSelected,
  borderStyle = "border-[#F2843B]",
}) => {
  const sizeClass = imgSize === "small" ? "w-10 h-10" : "w-12 h-12";
  const [selected, setSelected] = useState(isSelected);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-white rounded-lg shadow-custom py-2 px-4 ${className} flex flex-col items-center cursor-pointer border-2 ${
        selected ? borderStyle : "border-white"
      }`}
    >
      <div className={`rounded-full ${sizeClass} mb-1 shadow-inner-custom relative z-10`}>
        <img
          src={image}
          alt={name}
          className={`${sizeClass} block rounded-full relative -z-10`}
        />
      </div>
      <div className="text-sm font-semibold">{name}</div>
      {count && <div className="text-xs whitespace-nowrap">{count}회 사용</div>}
    </div>
  );
};

export default WhiteCard;
