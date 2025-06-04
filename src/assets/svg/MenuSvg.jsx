const MenuSvg = ({ openNavigation }) => {
  return (
    <svg
      className="overflow-visible cursor-pointer"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >
      <rect
        className="transition-all origin-center"
        y={openNavigation ? "5" : "0"}
        width="20"
        height="2"
        rx="1"
        fill="#270b00"
        transform={`rotate(${openNavigation ? "45" : "0"})`}
      />
      <rect
        className={`transition-all origin-center ${openNavigation ? "opacity-0" : "opacity-100"}`}
        y={openNavigation ? "5" : "7"}
        width="25"
        height="2"
        rx="1"
        fill="#270b00"
      />
      <rect
        className="transition-all origin-center"
        y={openNavigation ? "5" : "14"}
        width="20"
        height="2"
        rx="1"
        fill="#270b00"
        transform={`rotate(${openNavigation ? "-45" : "0"})`}
      />
    </svg>
  );
};

export default MenuSvg;
