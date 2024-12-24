import axios from "axios"
import { atom, selector, selectorFamily } from "recoil"

export const pokemonAtom = atom({
    key: "pokemonAtom",
    default: selector({
        key: "pokemonFetcher",
        get: async () => {
            await new Promise(r => setTimeout(r, 2000));
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=60&offset=0");
            return response.data.results;
        }
    })
})

export const pokeDetailsFetcher = selectorFamily({
    key: "pokeDetailsFetcher",
    get: (url) => async () => {
        const response = await axios.get(url);
        return response.data;
    }
})