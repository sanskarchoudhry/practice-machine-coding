import axios from "axios";
import envConfig from "../config/env";
import { PokemonData, PokemonList } from "./types";

export const getPokemonDataByID = async (id: string): Promise<PokemonData> => {
  const response = await axios.get<PokemonData>(
    `${envConfig.pokeAPI}pokemon/${id}`
  );
  return response.data;
};

export const getPokemonDataByName = async (
  name: string
): Promise<PokemonData> => {
  const response = await axios.get<PokemonData>(
    `${envConfig.pokeAPI}pokemon/${name}`
  );
  return response.data;
};

export const getPagination = async (
  limit: string,
  offset: string
): Promise<PokemonList> => {
  const response = await axios.get<{ results: PokemonList }>(
    `${envConfig.pokeAPI}pokemon/?limit=${limit}&offset=${offset}`
  );
  return response.data.results;
};
