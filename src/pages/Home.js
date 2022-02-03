import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <main>
        <h2>Home</h2>
      </main>
      <nav>
        <ul>
          <li>
            <Link to="/products/list">Productos</Link>
          </li>
          <li>
            <Link to="/products/create">Nuevo producto</Link>
          </li>
          <li>
            <Link to="/products/edit">Editar producto</Link>
          </li>
          <li>
            <Link to="/products/detail">Detalle de producto</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Home;
