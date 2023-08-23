import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/App">La Aplicación Funcionando</Link></li>
          <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;