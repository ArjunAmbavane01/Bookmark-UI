import ExtensionCard from './ExtensionCard'

const Extension = () => {
   return <div className="mt-28 mb-32">
   <div className="text-4xl font-medium flex justify-center">Download the extension</div>
   <div className="text-md font-normal mt-8 w-[550px] text-neutral-500 text-center mx-auto">
   We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
   </div>
   <div className='flex mt-24 justify-center gap-14 relative'>
    <ExtensionCard imgSrc={'https://tailwindfromscratch.com/website-projects/bookmark/images/logo-chrome.svg'} type={'Chrome'} version={62} top={''}/>
    <ExtensionCard imgSrc={'https://tailwindfromscratch.com/website-projects/bookmark/images/logo-firefox.svg'} type={'Firefox'} version={55} top={'top-4'}/>
    <ExtensionCard imgSrc={'https://tailwindfromscratch.com/website-projects/bookmark/images/logo-opera.svg'} type={'Opera'} version={46} top={'top-8'}/>
   </div>
   </div> 
}

export default Extension;