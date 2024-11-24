import { useState } from "react";
import Hero from "./Hero";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="mt-16 h-[500px]">
      <div className="text-lg font-normal text-neutral-700  w-[45%] mx-auto h-[50px] border-neutral-200 border-b-[1px] relative">
        <div className="flex justify-around">
          <div
            className="duration-400 transition-colors hover:text-[#fa5757] cursor-pointer"
            onClick={() => setActiveTab(1)}
          >
            Simple Bookmarking
          </div>
          <div
            className="duration-400 transition-colors hover:text-[#fa5757] cursor-pointer"
            onClick={() => setActiveTab(2)}
          >
            Speedy Searching
          </div>
          <div
            className="duration-400 transition-colors hover:text-[#fa5757] cursor-pointer"
            onClick={() => setActiveTab(3)}
          >
            Easy Sharing
          </div>
        </div>
        <div
          className={` transition-all duration-500 ease-in-out h-[3px] bg-[#fa5757] absolute bottom-0 ${
            activeTab == 1
              ? "left-6 w-[30%]"
              : activeTab == 2
              ? "left-[40%] w-[30%]"
              : "left-[73%] w-[27%]"
          } `}
        ></div>
      </div>
      <div className="mt-4 grid grid-cols-2">
        {activeTab == 1 && <Tab1 />}
        {activeTab == 2 && <Tab2 />}
        {activeTab == 3 && <Tab3 />}
      </div>
    </div>
  );
};

const Tab1 = () => {
  return (
    <>
      <div className="relative">
        <Hero position={"top-36 rounded-r-full left-0"} />
        <img
          className="z-30 absolute top-10 left-28"
          src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-1.svg"
          alt=""
        />
      </div>
      <div className="mt-9">
        <div className="font-medium text-3xl">Bookmark in one click</div>
        <div className="font-normal text-md mt-10 text-neutral-500 w-[60%]">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </div>
        <div className="transition-colors duration-400 cursor-pointer mt-10 p-3 border-2 w-[125px] flex justify-center border-white rounded-lg bg-[#5368df] text-white hover:text-[#5368df] hover:bg-white hover:border-[#5368df]">
          More Info
        </div>
      </div>
    </>
  );
};

const Tab2 = () => {
  return (
    <>
      <div className="relative">
        <Hero position={"top-36 rounded-r-full left-0"} />
        <img
          className="z-30 absolute top-10 left-[202px] h-[375px]"
          src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-2.svg"
          alt=""
        />
      </div>
      <div className="mt-8">
        <div className="font-medium text-3xl">Intelligent search</div>
        <div className="font-normal text-md mt-10 text-neutral-500 w-[60%]">
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </div>
        <div className="transition-colors duration-400 cursor-pointer mt-10 p-3 border-2 w-[125px] flex justify-center border-white rounded-lg bg-[#5368df] text-white hover:text-[#5368df] hover:bg-white hover:border-[#5368df]">
          More Info
        </div>
      </div>
    </>
  );
};

const Tab3 = () => {
  return (
    <>
      <div className="relative">
        <Hero position={"top-36 rounded-r-full left-0"} />
        <img
          className="z-30 absolute top-8 left-[202px]"
          src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-3.svg"
          alt=""
        />
      </div>
      <div className="mt-7">
        <div className="font-medium text-3xl">Share your bookmarks</div>
        <div className="font-normal text-md mt-10 text-neutral-500 w-[60%]">
          Easily share your bookmarks and collections with others. Create a
          shareable a link that you can send at the click of a button.
        </div>
        <div className="transition-colors duration-400 cursor-pointer mt-10 p-3 border-2 w-[125px] flex justify-center border-white rounded-lg bg-[#5368df] text-white hover:text-[#5368df] hover:bg-white hover:border-[#5368df]">
          More Info
        </div>
      </div>
    </>
  );
};

export default Tab;
