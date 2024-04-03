"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./pokemon";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1025"
        );
        setPokemonList(response.data.results);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    }

    fetchPokemonData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        className="grid w-3/4 my-20"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          justifyItems: "center",
        }}
      >
        {pokemonList.map((pokemon, index) => (
          <Pokemon name={pokemon.name} key={index} />
        ))}
      </div>
    </div>
  );
}
