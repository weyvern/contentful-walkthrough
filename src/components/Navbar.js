import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>
        Super blog 😊
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarsExample04'
        aria-controls='navbarsExample04'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarsExample04'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item active'>
            <NavLink exact to='/' className='nav-link' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink exact to='/articles' className='nav-link' activeClassName='active'>
              Articles
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
