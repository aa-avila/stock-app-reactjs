function ProdInfo(props) {
  return (
    <>
      <div>{props.title}</div>
      <div>
        <span>Precio: </span>
        <span>{props.stock}</span>
      </div>
      <div>
        <span>Stock: </span>
        <span>{props.stock}</span>
      </div>
    </>
  );
}

export default ProdInfo;
