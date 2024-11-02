const Button = ({ children, className, disabled, onClick }) => {
  return (
    <button
      className={`w-full font-semibold h-12 text-white ${
        disabled ? "bg-[#979797]" : "bg-[#F2843B]"
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
