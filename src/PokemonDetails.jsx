import { useParams } from "react-router-dom"
import { useRecoilValue } from "recoil";
import { pokeDetailsFetcher } from "./store/atoms/pokemonAtom";
import { Tag } from "./components/Tag";
import { useEffect, useRef, useState } from "react";
import { FastAverageColor } from "fast-average-color";

export function PokemonDetails() {
    const params = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
    const pokeDetails = useRecoilValue(pokeDetailsFetcher(url));
    const bgRef = useRef(null);
    const [bgColor, setBgColor] = useState();

    useEffect(() => {
        const fac = new FastAverageColor();
        fac.getColorAsync(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDetails.id}.svg`)
        .then(color => {
            setBgColor(color.hex);

            console.log('Average color', color.hex);
        })
        .catch(e => {
            console.log(e);
        });
    }, [pokeDetails])

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
            <main className="border border-red-600 px-32 py-20">
                {/* <div ref={bgRef} className={`relative before:content-[''] before:fixed before:w-[600px] before:h-[600px] before:rounded-full ${bgColor} before:blur-[700px]`}>
                        <img
                            className="size-64 relative"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDetails.id}.svg`}
                            alt="An image of the pokemon"
                        />
                </div> */}
                <div
                    className="relative before:content-[''] before:fixed before:w-[600px] before:h-[600px] before:rounded-full before:blur-[700px] before:opacity-70">
                    <style>
                        {`
                        .relative::before {
                            background-color: ${bgColor};
                            content: '';
                            position: fixed;
                            width: 600px;
                            height: 600px;
                            border-radius: 50%;
                            filter: blur(700px);
                        }
                        `}
                    </style>
                    <img
                            className="size-64 relative"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDetails.id}.svg`}
                            alt="An image of the pokemon"
                        />
                </div>
            </main>
        </div>
    )
}