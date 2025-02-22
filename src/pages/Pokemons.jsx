import { useRecoilValue, useRecoilState } from "recoil";
import { Logo } from "./Landing";
import { PokemonCard } from "../components/PokemonCard";
import {
	paginatedPokemonSelector,
	paginatedPokemonAtom,
	allPokemonListAtom,
} from "../store/atoms/pokemonAtom";
import { Loader } from "../components/Loader";
import { startTransition, Suspense, useState } from "react";
import useDebounce from "../hooks/useDebounce";

export function Pokemons() {
	const allPokemon = useRecoilValue(allPokemonListAtom);
	const paginatedPokemon = useRecoilValue(paginatedPokemonSelector);
	const [pagination, setPagination] = useRecoilState(paginatedPokemonAtom);
	const [search, setSearch] = useState("");
	const [debouncedSearch] = useDebounce(search, 300);

	const handleSearchChange = (e) => {
		const value = e.target.value;
		startTransition(() => {
			setSearch(value);
		});
	};

	const handleNextPage = () =>
		setPagination((prev) => ({ ...prev, page: prev.page + 1 }));

	const handlePrevPage = () =>
		setPagination((prev) => ({ ...prev, page: Math.max(prev.page - 1, 1) }));

	const filteredPokemon = debouncedSearch
		? allPokemon?.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(search.toLowerCase())
		  )
		: paginatedPokemon;

	if (!allPokemon || !paginatedPokemon) return <Loader />;

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
							<PokemonCard url={pokemon.url} key={pokemon.name || index} />
						))
					) : (
						<div className="text-white">No Pokémon found.</div>
					)}
				</Suspense>
			</main>

			{!debouncedSearch && (
				<div className="flex gap-4 mt-5 mb-8 z-40">
					<button
						onClick={handlePrevPage}
						disabled={pagination.page === 1}
						className="bg-white bg-opacity-10 px-6 py-2 rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-20 transition-all"
					>
						Prev
					</button>
					<button
						onClick={handleNextPage}
						className="bg-white bg-opacity-10 px-6 py-2 rounded-full text-white hover:bg-opacity-20 transition-all"
					>
						Next
					</button>
				</div>
			)}
		</div>
	);
}
