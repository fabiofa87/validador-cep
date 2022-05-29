const Resultado = ({ resultado }) => {
  return (
    <div>
      <h1>Resultado</h1>
      <h3>Estado: {resultado.state}</h3>
      <h3>Endereço: {resultado.address}</h3>
      <h3>Bairro: {resultado.district}</h3>
    </div>
  );
};
export default Resultado;
