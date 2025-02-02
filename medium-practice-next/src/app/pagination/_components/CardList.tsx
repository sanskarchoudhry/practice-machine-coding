"use client";
import React, { useEffect, useState } from "react";
import { getPagination } from "@/utils/api";
import Card from "./Card";
import { PokemonList } from "@/utils/api/types";
import { useSearchParams } from "next/navigation";

export default function CardList() {
  const [pokemonList, setPokemonList] = useState<PokemonList>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const limit = searchParams.get("limit") || "40";
  const offset = searchParams.get("offset") || "0";

  useEffect(() => {
    async function fetchPokemonList() {
      setLoading(true);
      try {
        const data = await getPagination(limit, offset);
        setPokemonList(data);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemonList();
  }, [limit, offset]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {pokemonList.map((pokemon, index) => (
        <div key={index}>
          <Card pokeName={pokemon.name} />
        </div>
      ))}
    </div>
  );
}
