
const Header = () => {
  return (
    <div className="w-full h-[125px] flex justify-between items-center pt-4 px-16">
      <div className="flex justify-center items-center">
        <img
        className="w-[180px] h-[34px]"
          src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark.svg"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center w-[450px] text-neutral-400 text-lg">
        <div className="hover:text-[#fa5757]"> Features</div>
        <div className="hover:text-[#fa5757]">Download </div>
        <div className="hover:text-[#fa5757]">FAQ</div>
        <div className="duration-400 transition-colors bg-[#fa5757] border-2 border-white rounded-lg py-2 px-10 text-white  hover:bg-white hover:text-[#fa5757] hover:border-2 hover:border-[#fa5757]">Login</div>
      </div>
    </div>
  );
};

export default Header;
