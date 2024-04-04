import Type from "./type";

export default function Profile(info: any) {
  return (
    <div className="lg:w-3/5 max-h-[90dvh] bg-slate-100 rounded-2xl outline-none flex flex-col overflow-y-auto">
      <div className="w-full bg-red-500 rounded-t-2xl flex justify-evenly items-center p-3 mb-5 sticky top-0 z-10">
        <p
          className="text-gray-100 font-bold text-center capitalize"
          style={{ fontSize: "calc(2dvw + 3dvh)" }}
        >
          {info.name}
        </p>
        <p
          className="text-zinc-900 font-bold text-center capitalize flex-shrink-0"
          style={{ fontSize: "calc(2dvw + 3dvh)" }}
        >
          #{info.id}
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row p-3">
        <div className="w-10/12 lg:w-1/2 mx-auto lg:p-5">
          {info.pokemon.sprites && info.pokemon.sprites.front_default && (
            <img
              src={info.pokemon.sprites.front_default}
              className="w-full h-auto mx-auto bg-slate-300 rounded-full my-2"
              alt={info.pokemon.name}
            />
          )}
          <div className="flex justify-around my-5">
            {info.pokemon.types &&
              info.pokemon.types.map((type: any, index: any) => (
                <Type key={index} type={type.type.name} />
              ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 pt-0 p-3 flex flex-col justify-center">
          <div className="text-gray-100 bg-sky-400 p-3 text-center font-semibold text-lg rounded-3xl">
            Height: {info.pokemon.height / 10}m
          </div>
          <div className="text-gray-100 bg-sky-400 p-3 text-center font-semibold text-lg my-3 rounded-3xl mb-8">
            Weight: {info.pokemon.weight}kg
          </div>
          <div className="text-gray-950 text-center font-bold text-2xl">
            Abilities
          </div>
          {info.pokemon.abilities &&
            info.pokemon.abilities.map((ability: any, index: any) => (
              <div
                key={index}
                className="text-gray-100 bg-red-500 p-3 text-center font-semibold text-lg mt-3 rounded-3xl capitalize"
              >
                {ability.ability.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
