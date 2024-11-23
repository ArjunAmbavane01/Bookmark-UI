const Hero = ({position}) => {
  return (
    <div className={`w-[80%] h-[300px] bg-[#5368df] absolute ${position} z-10`}></div>
  );
};

export default Hero;
