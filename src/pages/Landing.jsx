import heroImage from "../assets/hero.png"
import { useNavigate } from "react-router-dom"
import { TwitterLogo } from "../assets/TwitterLogo";
import { GithubLogo } from "../assets/GithubLogo";


//Gradient classes - after:content-[''] after:absolute after:w-[800px] after:h-[800px] after:rounded-full after:bg-[#32F1E6] after:blur-[250px] after:z-10 after:-top-96 after:-left-96 after:bg-opacity-[30%]
export function Landing() {
    const navigate = useNavigate();
    function handleNavigate() {
        navigate("/pokemons");
    }

    return (
        <>
            <div className="h-screen w-screen bg-black p-10 overflow-hidden">
                <nav className="flex justify-between items-center relative gap-4 md:px-16">
                    {/* <div className="bg-white p-4 rounded-2xl bg-opacity-10 after:absolute after:top-0 after:content-[''] after:w-24 after:rounded-full after:bg-emerald-400 after:blur-md after:z-10"> */}
                    <Logo />
                    <div className="relative bg-white p-4 rounded-2xl border border-white border-opacity-20 bg-opacity-10 flex justify-between items-center">
                        <a href="#" className="text-green mr-8">
                            <TwitterLogo />
                        </a>
                        <a href="#" className="text-green">
                            <GithubLogo />
                        </a>
                    </div>
                </nav>
                <div className="mt-12 md:mt-32 md:px-16 z-0 relative grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center before:content-[''] before:fixed before:w-[1000px] before:h-[1000px] before:rounded-full before:bg-[#32F1E6] before:blur-[400px] before:bg-opacity-[25%]">
                    <div className="text-white w-fit mr-auto">
                        <h2 className="text-4xl md:text-4xl leading-snug text-white font-delaGothicOne mb-7">Explore the Complete <span className="text-green">Pokemon</span> Gallery</h2>
                        <p className="font-mada mb-7">Explore detailed profiles of all Pokémon species, types, stats, and more!</p>
                        <button className="bg-[#E4FF60] px-4 py-3 bg-green rounded-xl text-black font-delaGothicOne text-sm" onClick={handleNavigate}>Explore Now</button>
                    </div>
                    <div>
                        <img src={heroImage} alt="heroImage" className="relative z-[0] scale-110" />
                    </div>
                </div>
            </div>
        </>
    )
}

export function Logo() {
    const navigate = useNavigate();
    function handleNavigate() {
        navigate("/");
    }
    return (
        <div onClick={handleNavigate} className="relative bg-white p-4 rounded-2xl border border-white border-opacity-20 bg-opacity-10 cursor-pointer w-fit">
            <h1 className="text-[#E4FF60] text-xl md:text-3xl font-delaGothicOne tracking-tighter">PokeFinder</h1>
        </div>
    )
}