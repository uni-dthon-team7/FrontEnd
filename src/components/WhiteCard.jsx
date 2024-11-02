const WhiteCard = ({ children, className, image, name, count }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-custom py-2 px-4 ${className} flex flex-col items-center`}
    >
      <div className="shadow-inner-custom rounded-full w-12 h-12 mb-1">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 m-1 block rounded-full"
        />
      </div>
      <div className="text-sm font-semibold">{name}</div>
      <div className="text-xs whitespace-nowrap">{count}회 사용</div>
    </div>
  );
};

export default WhiteCard;
