import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/articles'>Articles</NavLink>
      <NavLink to='/articles/hello'>Article: hello</NavLink>
    </ul>
  );
};

export default Navbar;
