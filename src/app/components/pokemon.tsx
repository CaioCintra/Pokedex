import axios from "axios";
import { useEffect, useState } from "react";
import Type from "./type";
import { Modal } from "@mui/material";
import Profile from "./profile";

export default function Pokemon(pokemonProp: any) {
  const [pokemon, setPokemon] = useState<any>({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonProp.name}`
        );
        setPokemon(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    }

    fetchPokemonData();
  }, [pokemonProp.name]);

  const formatPokemonName = (name: string) => {
    switch (name) {
      case "nidoran-m":
        return "Nidoran ♂";
      case "nidoran-f":
        return "Nidoran ♀";
      case "mr-mime":
        return "Mr. Mime";
      case "farfetchd":
        return "Farfetch'd";
      default:
        return name;
    }
  };

  // Format number to always get four digits
  const formatPokemonId = (id: number) => {
    return String(id).padStart(4, "0");
  };

  return (
    <>
      <div
        className="bg-slate-100 rounded-2xl p-2 m-5 w-52 h-52 shadow-md flex flex-col justify-center items-center hover:scale-110 cursor-pointer duration-300"
        onClick={handleOpen}
      >
        <div className="flex justify-evenly w-11/12">
          <p className="text-gray-950 font-bold text-center text-lg capitalize">
            {formatPokemonName(pokemon.name)}
          </p>
          <p className="text-gray-500 font-bold text-center text-lg capitalize flex-shrink-0">
            #{formatPokemonId(pokemon.id)}
          </p>
        </div>

        {pokemon.sprites && pokemon.sprites.front_default && (
          <img
            src={pokemon.sprites.front_default}
            className="w-28 h-28 mx-auto bg-slate-300 rounded-full my-2"
            alt={pokemon.name}
          />
        )}
        <div className="flex justify-around">
          {pokemon.types &&
            pokemon.types.map((type: any, index: any) => (
              <Type key={index} type={type.type.name} />
            ))}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center h-full"
      >
        <Profile
          pokemon={pokemon}
          name={formatPokemonName(pokemon.name)}
          id={formatPokemonId(pokemon.id)}
          close={handleClose}
        />
      </Modal>
    </>
  );
}
