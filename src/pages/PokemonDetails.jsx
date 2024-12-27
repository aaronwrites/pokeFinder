import { useParams } from "react-router-dom"
import { useRecoilValue } from "recoil";
import { pokeDetailsFetcher } from "../store/atoms/pokemonAtom";
import { Tag } from "../components/Tag";
import { Progress } from "../components/Progress";
import { Suspense } from "react";
import { Loader } from "../components/Loader";
import { Height } from "../assets/Height";
import { Weight } from "../assets/Weight";
import { Xp } from "../assets/Xp";

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
            <div className="bg-black h-screen w-full overflow-scroll text-white p-6">
                <div className="flex items-center flex-col-reverse m-8 md:justify-between md:flex-row md:m-24 font-delaGothicOne">
                    <div className="">
                        <h4 className="text-4xl capitalize tracking-wider mb-4">{pokeDetails.species.name}</h4>
                        <Tag tags={pokeDetails.types} />
                    </div>
                    <div>
                        <p className="text-9xl opacity-25">#{pokeDetails.id}</p>
                    </div>
                </div>
                <main className="py-10 md:px-40 md:py-20 flex flex-col 2xl:flex-row 2xl:justify-between justify-center items-center h-fit">
                    <div className={`relative before:content-[''] before:fixed before:w-[600px] before:h-[600px] before:rounded-full ${bgColors[color.name] ? bgColors[color.name] : "before:bg-slate-500"} before:blur-[700px] mb-7`}>
                            <img
                                className="md:size-96 size-48 relative 2xl:ml-32"
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDetails.id}.svg`}
                                alt="An image of the pokemon"
                            />
                    </div>
                    <div className="bg-white rounded-2xl backdrop-blur-xl bg-opacity-10 border border-white border-opacity-20 p-8 w-fit">
                        <div className="flex justify-evenly flex-col md:flex-row mb-5 items-center gap-3">
                            <div className="flex h-full gap-3 items-center">
                                <Height />
                                <div className="flex flex-col items-center">
                                    <div className="font-delaGothicOne">Height</div>
                                    <div className="font-mada font-semibold">{pokeDetails.height} dm</div>
                                </div>
                            </div>
                            <div className="w-[70%] h-[2px] bg-white md:w-[2px] md:h-8"></div>
                            <div className="flex h-full gap-3 items-center">
                                <Weight />
                                <div className="flex flex-col items-center">
                                    <div className="font-delaGothicOne">Weight</div>
                                    <div className="font-mada font-semibold">{pokeDetails.weight} hg</div>
                                </div>
                            </div>
                            <div className="w-[70%] h-[2px] bg-white md:w-[2px] md:h-8"></div>
                            <div className="flex h-full gap-3 items-center">
                                <Xp />
                                <div className="flex flex-col items-center">
                                    <div className="font-delaGothicOne">Base Experience</div>
                                    <div className="font-mada font-semibold">{pokeDetails.base_experience} XP</div>
                                </div>
                            </div>
                        </div>
                        <p className="font-delaGothicOne text-2xl mb-5">Stats</p>
                        <div className="flex flex-col gap-3">
                            {pokeDetails.stats.map((stat, index) => {
                                return (
                                    <Progress stats={stat} color={color.name} key={index}/>
                                )
                            })}
                        </div>
                    </div>
                </main>
            </div>

    )
}