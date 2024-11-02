const WhiteCard = ({ children, className, image, name, count, imgSize }) => {
  const sizeClass = imgSize === 'small' ? 'w-10 h-10' : 'w-12 h-12';

  return (
    <div
      className={`bg-white rounded-lg shadow-custom py-2 px-4 ${className} flex flex-col items-center`}
    >
      <div className={`shadow-inner-custom rounded-full ${sizeClass} mb-1`}>
        <img
          src={image}
          alt={name}
          className={`${sizeClass} m-1 block rounded-full`}
        />
      </div>
      <div className="text-sm font-semibold">{name}</div>
      {count && <div className="text-xs whitespace-nowrap">{count}회 사용</div>}
    </div>
  );
};

export default WhiteCard;