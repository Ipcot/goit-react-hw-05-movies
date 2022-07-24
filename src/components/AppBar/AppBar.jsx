import { Box } from 'components/Box/Box';
// import { Link } from 'react-router-dom';
import { NavItem } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'HOME' },
  { href: 'movies', text: 'MOVIES' },
];

export const AppBar = () => {
  return (
    <Box as="header" p={4} borderBottom="1px solid black">
      <Box as="nav" display="flex">
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
