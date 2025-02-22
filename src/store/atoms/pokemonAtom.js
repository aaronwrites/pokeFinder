import axios from "axios";
import { atom, selector, selectorFamily } from "recoil";

export const allPokemonListAtom = atom({
	key: "allPokemonListAtom",
	default: selector({
		key: "allPokemonFetcher",
		get: async () => {
			const response = await axios.get(
				"https://pokeapi.co/api/v2/pokemon?limit=1304"
			);
			return response.data.results;
		},
	}),
});

export const paginatedPokemonAtom = atom({
	key: "paginatedPokemonAtom",
	default: { page: 1, perPage: 20 },
});

export const paginatedPokemonSelector = selector({
	key: "paginatedPokemonSelector",
	get: ({ get }) => {
		const { page, perPage } = get(paginatedPokemonAtom);
		const allPokemon = get(allPokemonListAtom);
		const startIndex = (page - 1) * perPage;
		return allPokemon.slice(startIndex, startIndex + perPage);
	},
});

export const pokeDetailsFetcher = selectorFamily({
	key: "pokeDetailsFetcher",
	get: (url) => async () => {
		const response = await axios.get(url);
		return response.data;
	},
});
