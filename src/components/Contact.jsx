const Contact = () => {

    return <div className="w-full h-[400px] bg-[#5368df] text-white flex flex-col items-center pt-20 ">
        <div className="text-lg font-normal tracking-widest">35,000+ ALREADY JOINED</div>

<div className="mt-6 text-4xl font-medium text-center w-[475px]">Stay up-to-date with what we're doing</div>
<div className="flex mt-8 gap-9">
    <input className="py-3 px-5 rounded-lg focus:outline-none text-black" type="text" placeholder="Enter your email address" />
    <div className="duration-400 transition-colors bg-[#fa5757] border-2 border-[#fa5757] rounded-lg py-2 px-10 text-white hover:bg-white hover:text-[#fa5757] hover:border-[#fa5757] cursor-pointer flex items-center">
          Contact Us
        </div>
</div>
    </div>
}

export default Contact;