const Footer = () => {
  return (
    <div className="w-full h-[175px] bg-[#252b46] grid grid-cols-2">
      <div className="flex justify-between items-center pl-10 pr-32 text-neutral-400 text-lg">
        <img
          src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark-footer.svg"
          alt=""
        />
        <div className="duration-400 transition-colors hover:text-[#fa5757] cursor-pointer tracking-wider">
          FEATURES
        </div>
        <div className="duration-400 transition-colors hover:text-[#fa5757] cursor-pointer tracking-wider">
          DOWNLOAD
        </div>
        <div className="duration-400 transition-colors hover:text-[#fa5757] cursor-pointer tracking-wider">
          FAQ
        </div>
      </div>
      <div className="flex justify-end items-center pr-10 ">
          <img
          className="w-[30px] h-[30px] m-6 transition-transform duration-300 hover:filter hover:invert-[37%] hover:sepia-[98%] hover:saturate-[7476%] hover:hue-rotate-[1deg] hover:brightness-[95%] hover:contrast-[102%]"
            src="https://tailwindfromscratch.com/website-projects/bookmark/images/icon-facebook.svg"
            alt=""
          />
          <img
          className="w-[30px] h-[30px] m-6 transition-transform duration-300 hover:filter hover:invert-[37%] hover:sepia-[98%] hover:saturate-[7476%] hover:hue-rotate-[1deg] hover:brightness-[95%] hover:contrast-[102%]"
            src="https://tailwindfromscratch.com/website-projects/bookmark/images/icon-twitter.svg"
            alt=""
          />
      </div>
    </div>
  );
};

export default Footer;
