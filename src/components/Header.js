import './Header.scss';

function Header() {
  return (
    <section className="top-menu">
      <ul className="menu-list">
        <li className="menu-item item-1">
          <a href='#tarifas'>TARIFAS</a>
        </li>
        <li className="menu-item item-2">
          <a href='#fiestas'>FIESTAS CUMPLEAÑOS</a>
        </li>
        <li className="menu-item item-3">
          <a href='#funciona'>CÓMO FUNCIONA</a>
        </li>
        <li className="menu-item item-4">
          <a href='/'><img src={require(`../assets/favicon.png`)}/></a>
        </li>
        <li className="menu-item item-5">
          <a href='#nosotros'>SOBRE NOSOTROS</a>
        </li>
        <li className="menu-item item-6">
          <a href='#contacto'>CONTACTO</a>
        </li>
        <li className="menu-item item-7">
          <a href='/'>RESERVA</a>
        </li>
      </ul>
    </section>
  );
}

export default Header;
