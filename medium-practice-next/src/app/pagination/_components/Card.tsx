"use client";
import { getPokemonDataByName } from "@/utils/api";
import { PokemonData } from "@/utils/api/types";
import React, { useEffect, useState } from "react";

export default function Card({ pokeName }: { pokeName: string }) {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemonDataByName(pokeName);
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pokeName]);

  return (
    <div className="h-80 w-60 bg-slate-200 rounded-lg">
      {pokemonData ? (
        <>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
