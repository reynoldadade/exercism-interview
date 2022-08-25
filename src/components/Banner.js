const Banner = (props) => {
  return (
    <div className="banner flex flex-col items-center">
      <div className="mt-[41.24px] mb-[13.24px]">
        <img src={props.higherIcon} alt="top-logo" />
      </div>
      <h1 className="font-bold text-[31.25px] text-light-default mb-[20px]">
        {props.title}
      </h1>
      <div>
        <img src={props.lowerIcon} alt="bottom-logo" />
      </div>
    </div>
  );
};

export default Banner;
