const ExtensionCard = ({ imgSrc, type, version, top }) => {
  return (
    <div
      className={`relative h-[375px] w-[300px] rounded-lg flex items-center flex-col shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${top}`}
    >
      <div className="mt-8 ">
        <img src={imgSrc} alt="" />
      </div>
      <div className="mt-8 text-xl font-semibold">Add to {type}</div>
      <div className="mt-4 text-md font-normal text-neutral-500">
        Minimum Version {version}
      </div>
      <div className="mt-6">
        <img
          src="https://tailwindfromscratch.com/website-projects/bookmark/images/bg-dots.svg"
          alt=""
        />
      </div>
      <div className="transition-colors duration-400 cursor-pointer mt-6 p-4 border-2 w-[250px] flex justify-center border-white rounded-lg bg-[#5368df] text-white hover:text-[#5368df] hover:bg-white hover:border-[#5368df]">
        Add & Install Extension
      </div>
    </div>
  );
};

export default ExtensionCard;
