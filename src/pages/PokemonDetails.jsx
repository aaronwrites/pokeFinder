import { useParams } from "react-router-dom"
import { useRecoilValue } from "recoil";
import { pokeDetailsFetcher } from "../store/atoms/pokemonAtom";
import { Tag } from "../components/Tag";
import { Progress } from "../components/Progress";
import { Suspense } from "react";
import { Loader } from "../components/Loader";

export function PokemonDetails() {
    const params = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
    const pokeDetails = useRecoilValue(pokeDetailsFetcher(url));
    const { color } = useRecoilValue(pokeDetailsFetcher(pokeDetails.species.url));
    const bgColors = {
        "blue": "before:bg-blue-500",
        "brown": "before:bg-[#B99152]",
        "gray": "before:bg-gray-500",
        "green": "before:bg-green-500",
        "pink": "before:bg-pink-500",
        "purple": "before:bg-purple-500",
        "red": "before:bg-[#EE781E]",
        "yellow": "before:bg-yellow-500"
    }
    
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
                <main className="px-40 py-20 flex justify-between items-center">
                    <div className={`relative before:content-[''] before:fixed before:w-[600px] before:h-[600px] before:rounded-full ${bgColors[color.name] ? bgColors[color.name] : "before:bg-slate-500"} before:blur-[700px]`}>
                            <img
                                className="size-96 relative ml-32"
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDetails.id}.svg`}
                                alt="An image of the pokemon"
                            />
                    </div>
                    <div className="bg-white rounded-2xl backdrop-blur-xl bg-opacity-10 border border-white border-opacity-20 p-8 w-fit">
                        <p className="font-delaGothicOne text-2xl mb-5">Stats</p>
                        <div className="flex flex-col gap-3">
                            {pokeDetails.stats.map((stat, index) => {
                                return <Progress stats={stat} color={color.name} key={index}/>
                            })}
                        </div>
                    </div>
                </main>
                <div className="bg-white rounded-2xl backdrop-blur-xl bg-opacity-10 border border-white border-opacity-20 p-8 mx-10 grid grid-cols-3 place-items-center">
                    <div>Height: {pokeDetails.height} dm</div>
                    <div>Weight: {pokeDetails.weight} hg</div>
                    <div>Base Experience: {pokeDetails.base_experience} XP</div>
                </div>
            </div>

    )
}