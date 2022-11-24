import cuadernosByn from "../../assets/cuadernosbyn.jpg";
function Body() {
  return (
    <div className="relative">
      <img src={cuadernosByn} alt="" />
      <div className="absolute top-10 left-0 right-0 flex bottom-15 flex-col">
        <h1>Los mejores regalos...</h1>
        <h2>¡Están hechos a medida!</h2>
        <button>Ver más</button>
      </div>
    </div>
  );
}

export default Body;