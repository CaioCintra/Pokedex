export default function Type(type: any) {
  switch (type.type) {
    case "normal":
      return (
        <div className="bg-[#A9A878] div-type">
          normal
        </div>
      );
    case "bug":
      return (
        <div className="bg-[#A8B821] div-type">
          bug
        </div>
      );
    case "fighting":
      return (
        <div className="bg-[#B9322C] div-type">
          fighting
        </div>
      );
    case "ghost":
      return (
        <div className="bg-[#725899] div-type">
          ghost
        </div>
      );
    case "electric":
      return (
        <div className="bg-[#F9D021] div-type">
          electric
        </div>
      );
    case "flying":
      return (
        <div className="bg-[#A690F3] div-type">
          flying
        </div>
      );
    case "steel":
      return (
        <div className="bg-[#B8B8D0] div-type">
          steel
        </div>
      );
    case "psychic":
      return (
        <div className="bg-[#F85B86] div-type">
          psychic
        </div>
      );
    case "poison":
      return (
        <div className="bg-[#A040A1] div-type">
          poison
        </div>
      );
    case "fire":
      return (
        <div className="bg-[#F07F2F] div-type">
          fire
        </div>
      );
    case "ice":
      return (
        <div className="bg-[#98D8D8] div-type">
          ice
        </div>
      );
    case "ground":
      return (
        <div className="bg-[#E0BF6F] div-type">
          ground
        </div>
      );
    case "water":
      return (
        <div className="bg-[#6890EF] div-type">
          water
        </div>
      );
    case "dragon":
      return (
        <div className="bg-[#7038F2] div-type">
          dragon
        </div>
      );
    case "rock":
      return (
        <div className="bg-[#B89F38] div-type">
          rock
        </div>
      );
    case "grass":
      return (
        <div className="bg-[#74C951] div-type">
          grass
        </div>
      );
    case "dark":
      return (
        <div className="bg-[#6F5848] div-type">
          dark
        </div>
      );
      case "fairy":
        return (
          <div className="bg-[#F9BFF7] div-type">
            fairy
          </div>
        );
    default:
      return null; // If not corresponding with any type
  }
}
