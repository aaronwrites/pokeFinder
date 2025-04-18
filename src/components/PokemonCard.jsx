import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { Tag } from "../components/Tag";
import { pokeDetailsFetcher } from "../store/atoms/pokemonAtom";
import { useNavigate } from "react-router-dom";
import CardSkeleton from "./CardSkeleton";

export function PokemonCard({ url }) {
	const pokeDetailsLoadable = useRecoilValueLoadable(pokeDetailsFetcher(url));
	const navigate = useNavigate();
	function navigateToDetails(id) {
		navigate(`/pokemon/details/${id}`);
	}

	if (pokeDetailsLoadable.state == "loading") {
		return <CardSkeleton />;
	}

	const pokeDetails = pokeDetailsLoadable.contents;

	return (
		<div
			onClick={() => navigateToDetails(pokeDetails.id)}
			className="relative text-white font-delaGothicOne flex flex-col min-w-72 h-fit p-10 bg-[#32F1E6]/7 border border-solid border-[#E4FF60]/60 rounded-xl shadow-md shadow-[#E4FF60]/50 hover:shadow-[#E4FF60]/70 hover:shadow-lg hover:-translate-y-2 justify-center items-center gap-6 transition ease-in-out duration-200 cursor-pointer z-30 bg-black bg-opacity-45"
		>
			<div>
				<p className="text-3xl opacity-25">#{pokeDetails.id}</p>
			</div>
			<img
				className="size-52"
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDetails.id}.svg`}
				alt="An image of the pokemon"
			/>
			<h4 className="text-2xl tracking-wider">{pokeDetails.species.name}</h4>
			<Tag tags={pokeDetails.types} />
			<p className="text-sm text-[#D0C8C8]">Click for Detailed Stats</p>
		</div>
	);
}
