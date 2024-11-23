import Tab from "./Tab";

const Features = () => {
  return (
    <div className="w-full mt-16">
      <div className="font-semibold text-4xl flex justify-center">Features</div>
      <div className="font-normal text-md text-neutral-500 mt-8 w-[35%] mx-auto text-center ">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </div>
      <Tab />
    </div>
  );
};

export default Features;
