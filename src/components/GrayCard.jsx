const GrayCard = ({ className, children }) => {
  return (
    <div className={`rounded-md bg-[#F5F5F5] p-1 ${className}`}>{children}</div>
  );
};

export default GrayCard;
