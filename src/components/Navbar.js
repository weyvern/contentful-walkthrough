import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/articles/main'>Articles</NavLink>
      <NavLink to='/articles/hello'>Article: hello</NavLink>
    </ul>
  );
};

export default Navbar;
