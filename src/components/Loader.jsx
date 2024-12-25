import Pokeloader from '../assets/Pokeloader.webm';

export function Loader() {
    return (
        <div className="relative w-full h-screen bg-black flex items-center justify-center before:content-[''] before:absolute before:w-[1000px] before:h-[1000px] before:rounded-full before:bg-[#32F1E6] before:blur-[400px] before:bg-opacity-[10%]">
            <video id="loader" autoPlay loop muted>
                <source src={Pokeloader} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
