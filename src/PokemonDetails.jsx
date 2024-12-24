import { useParams } from "react-router-dom"
import { useRecoilValue } from "recoil";
import { pokeDetailsFetcher } from "./store/atoms/pokemonAtom";
import { Tag } from "./components/Tag";
import { Progress } from "./components/Progress";

export const bgColors = {
    "blue": "before:bg-blue-500",
    "brown": "before:bg-[#B99152]",
    "gray": "before:bg-gray-500",
    "green": "before:bg-green-500",
    "pink": "before:bg-pink-500",
    "purple": "before:bg-purple-500",
    "red": "before:bg-[#EE781E]",
    "yellow": "before:bg-yellow-500"
}

export function PokemonDetails() {
    const params = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
    const pokeDetails = useRecoilValue(pokeDetailsFetcher(url));
    const { color } = useRecoilValue(pokeDetailsFetcher(pokeDetails.species.url));
    
    return (
        <div className="bg-black h-screen w-screen text-white p-6">
            <div className="flex justify-between items-center m-24 font-delaGothicOne">
                <div className="">
                    <h4 className="text-4xl capitalize tracking-wider mb-4">{pokeDetails.species.name}</h4>
                    <Tag tags={pokeDetails.types} />
                </div>
                <div>
                    <p className="text-9xl opacity-25">#{pokeDetails.id}</p>
                </div>
            </div>
            <main className="border border-red-600 px-32 py-20 flex justify-between items-center">
                <div className={`relative before:content-[''] before:fixed before:w-[600px] before:h-[600px] before:rounded-full ${bgColors[color.name] ? bgColors[color.name] : "before:bg-slate-500"} before:blur-[700px]`}>
                        <img
                            className="size-72 relative"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDetails.id}.svg`}
                            alt="An image of the pokemon"
                        />
                </div>
                <div className="w-[40%] h-[200px] bg-white rounded-2xl backdrop-blur-xl bg-opacity-10 border border-white border-opacity-30 p-8">
                    <p className="font-delaGothicOne text-2xl">Stats</p>
                    <Progress stats={pokeDetails.stats} />
                </div>
            </main>
        </div>
    )
}