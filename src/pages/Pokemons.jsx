import { useRecoilValueLoadable } from "recoil";
import { Logo } from "./Landing";
import { PokemonCard } from "../components/PokemonCard";
import { pokemonAtom } from "../store/atoms/pokemonAtom";
import { Loader } from "../components/Loader";
import { startTransition, Suspense, useState } from "react";
export function Pokemons() {
    const pokeData = useRecoilValueLoadable(pokemonAtom);
    const [search, setSearch] = useState("");

    if (pokeData.state === "loading") return <Loader />;

    const handleSearchChange = (e) => {
        const value = e.target.value;
        startTransition(() => {
            setSearch(value);
        });
    };

    const filteredPokemon = pokeData.contents
        ?.filter((pokemon) => pokemon.name && pokemon.url)
        .filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()));
    return (
            <div className="h-screen w-full bg-black flex flex-col items-center overflow-scroll mb-5 scroll-smooth">
                <header className="p-8 flex justify-center flex-col items-center w-full gap-10">
                    <Logo />
                    <div>
                        <input
                            type="text"
                            placeholder="Search for a Pokémon"
                            className="rounded-[100px] bg-white bg-opacity-10 p-4 text-white"
                            value={search}
                            onChange={handleSearchChange}
                        />
                    </div>
                </header>
                <main className="relative grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mb-10 after:content-[''] after:fixed after:w-[1000px] after:h-[900px] after:rounded-full after:bg-[#32F1E6] after:blur-[500px] after:opacity-20">
                    <Suspense fallback={<Loader />}>
                        {filteredPokemon?.length ? (
                            filteredPokemon.map((pokemon, index) => (
                                    <PokemonCard url={pokemon.url} key={index} />
                            ))
                        ) : (
                        <   div className="text-white">No Pokémon found.</div>
                        )}
                    </Suspense>
                </main>
            </div>
    )
}