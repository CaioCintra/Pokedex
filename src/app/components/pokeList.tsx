"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./pokemon";
import { IconButton } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?offset=${
            (currentPage - 1) * 36
          }&limit=36`
        );
        setPokemonList(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 36));

        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    }

    fetchPokemonData();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <div className="w-full h-28 bg-red-500 text-5xl font-bold text-slate-50 flex justify-evenly items-center p-3 mb-5 top-0 sticky z-10">
        Pokédex
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div
          className="grid w-3/4 my-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            justifyItems: "center",
          }}
        >
          {pokemonList.map((pokemon, index) => (
            <Pokemon name={pokemon.name} key={index} />
          ))}
        </div>
        <div className="mb-11">
          <IconButton
            aria-label="back"
            onClick={prevPage}
            disabled={currentPage === 1}
            className="text-slate-50"
          >
            <KeyboardDoubleArrowLeftIcon fontSize="large" />
          </IconButton>
          <span className="mx-3">
            Page {currentPage} of {totalPages}
          </span>
          <IconButton
            aria-label="back"
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="text-slate-50"
          >
            <KeyboardDoubleArrowRightIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </>
  );
}
