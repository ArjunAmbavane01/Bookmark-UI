import Hero from "./Hero";

const Main = () => {
  return (
    <div className="w-full grid grid-cols-2">
      <div className="pl-16 pt-24">
        <div className="text-6xl font-medium">A Simple Bookmark Manager</div>
        <div className="text-2xl pt-12 text-neutral-400 w-[70%]">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </div>
        <div className="flex pt-12 items-center w-[80%] font-medium">
          <div className="duration-400 transition-colors rounded-lg h-[55px] flex items-center p-5 bg-[#5368df] mr-12 text-white hover:bg-white hover:text-[#5368df] hover:border-2 hover:border-[#5368df] border-2 border-white">
            Get it on Chrome
          </div>
          <div className="duration-400 transition-colors rounded-lg h-[55px] flex items-center p-5 bg-neutral-300 text-black hover:bg-white hover:text-neutral-700 hover:border-2 hover:border-neutral-400 border-2 border-white">
            Get it on Firefox
          </div>
        </div>
      </div>
      <div className="relative">
        <Hero />
        <img
          className="w-[625px] h-[475px] absolute top-8 -left-2 z-20"
          src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-hero.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Main;
