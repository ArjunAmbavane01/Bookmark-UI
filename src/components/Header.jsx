const Header = () => {
  return (
    <div className="w-full h-[125px] flex justify-between items-center pt-4 px-16">
      <div className="flex justify-center items-center">
        <img
          className="w-[140px] h-[26px]"
          src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark.svg"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center w-[450px] text-neutral-400 text-md">
        <div className="duration-400 transition-colors hover:text-[#fa5757] cursor-pointer tracking-wider">FEATURES</div>
        <div className="duration-400 transition-colors hover:text-[#fa5757] cursor-pointer tracking-wider">DOWNLOAD</div>
        <div className="duration-400 transition-colors hover:text-[#fa5757] cursor-pointer tracking-wider">FAQ</div>
        <div className="duration-400 transition-colors bg-[#fa5757] border-2 border-white rounded-lg py-2 px-10 text-white hover:bg-white hover:text-[#fa5757] hover:border-[#fa5757] cursor-pointer">
          Login
        </div>
      </div>
    </div>
  );
};

export default Header;
