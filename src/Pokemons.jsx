import { useRecoilValue } from "recoil";
import { Logo } from "./Landing";
import { PokemonCard } from "./PokemonCard";
import { pokemonAtom } from "./store/atoms/pokemonAtom";

export function Pokemons() {
    const pokeData = useRecoilValue(pokemonAtom);
    return (
        <div className="h-screen w-full bg-black flex flex-col items-center overflow-scroll mb-5 scroll-smooth">
            <header className="p-8 flex justify-between items-center w-full">
                <Logo />
                <div>
                    <input type="text" placeholder="Search for a pokemon" className="rounded-[100px] bg-white bg-opacity-10 p-4 text-white"/>
                </div>
            </header>
            <main className="relative grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mb-10 after:content-[''] after:fixed after:w-[1000px] after:h-[900px] after:rounded-full after:bg-[#32F1E6] after:blur-[500px] after:opacity-20">
                {
                    pokeData.map((pokemon, index) => {
                        return <PokemonCard key={index} url={pokemon.url} />
                    })
                }
            </main>
        </div>
    )
}