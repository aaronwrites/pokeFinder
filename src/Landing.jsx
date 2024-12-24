import heroImage from "./assets/hero.png"
import { useNavigate } from "react-router-dom"
import { TwitterLogo } from "./assets/TwitterLogo";
import { GithubLogo } from "./assets/GithubLogo";


//Gradient classes - after:content-[''] after:absolute after:w-[800px] after:h-[800px] after:rounded-full after:bg-[#32F1E6] after:blur-[250px] after:z-10 after:-top-96 after:-left-96 after:bg-opacity-[30%]
export function Landing() {
    const navigate = useNavigate();
    function handleNavigate() {
        navigate("/pokemons");
    }

    return (
        <>
            <div className="fixed w-[800px] h-[800px] rounded-full bg-[#32F1E6] blur-[250px] z-10 -top-96 -left-96 bg-opacity-[30%]"></div>
            <div className="fixed w-[1000px] h-[1000px] rounded-full bg-[#32F1E6] blur-[250px] -top-32 -right-32 bg-opacity-[20%]"></div>
            <div className="h-screen w-screen bg-black p-10 overflow-hidden">
                <nav className="px-16 flex justify-between relative">
                    {/* <div className="bg-white p-4 rounded-2xl bg-opacity-10 after:absolute after:top-0 after:content-[''] after:w-24 after:rounded-full after:bg-emerald-400 after:blur-md after:z-10"> */}
                    <Logo />
                    <div className="relative bg-white p-4 rounded-2xl border border-white border-opacity-20 bg-opacity-10 flex justify-between items-center">
                        <a href="#" className="text-green mr-10">
                            <TwitterLogo />
                        </a>
                        <a href="#" className="text-green">
                            <GithubLogo />
                        </a>
                    </div>
                </nav>
                <div className="mt-32 px-16 z-0 relative grid grid-cols-2 gap-8 place-items-center">
                    <div className="text-white w-fit mr-auto">
                        <h2 className="text-4xl leading-snug text-white font-delaGothicOne mb-7">Explore the Complete <span className="text-green">Pokemon</span> Gallery</h2>
                        <p className="font-mada mb-7">Explore detailed profiles of all Pokémon species, types, stats, and more!</p>
                        <button className="px-4 py-3 bg-green rounded-xl text-black font-delaGothicOne text-sm" onClick={handleNavigate}>Explore Now</button>
                    </div>
                    <div>
                        <img src={heroImage} alt="heroImage" className="relative z-[0] scale-110" />
                    </div>
                </div>
                <footer className="fixed bottom-0 text-[#9AA0A5]/80 bg-black tracking-wider font-poppins text-sm text-center w-full">
                    Made with ❤️ By Aaron H
                </footer>
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
        <div onClick={handleNavigate} className="relative bg-white p-4 rounded-2xl border border-white border-opacity-20 bg-opacity-10 cursor-pointer">
            <h1 className="text-green text-3xl font-delaGothicOne tracking-tighter">PokéDex</h1>
        </div>
    )
}