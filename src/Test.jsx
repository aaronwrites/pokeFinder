import { Tag } from "./components/Tag";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { pokeDetailsFetcher, pokemonAtom} from "./store/atoms/pokemonAtom";
import { PokemonCard } from "./PokemonCard";

export function Test() {
    const details = useRecoilValue(pokeDetailsFetcher("https://pokeapi.co/api/v2/pokemon/2/"));
    return (
        <div className="h-screen w-full bg-black p-32">
            {/* <Tag tags={details.types} /> */}
            <PokemonCard info={details}/>
        </div>
    )
}