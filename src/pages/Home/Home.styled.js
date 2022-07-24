import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.primary};
  }

  :hover {
    color: ${p => p.theme.colors.primary};
  }
`;
