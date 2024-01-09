import { Reveal } from "./reveal";

export const NeedHelp = () => {

    const openLink = () => {
        window.open("https://gearyaudie.com", "_blank");
    }

    return (
        <div 
            className="shadow-lg cursor-pointer rounded-3xl fixed bottom-14 right-20 px-8 py-2 bg-[#f9f9f9] hover:font-bold hover:bg-cyan-500 hover:text-white hover:scale-105 ease-in-out duration-200" 
            onClick={() => openLink()}
        >
          My Resume
        </div>
    )
}