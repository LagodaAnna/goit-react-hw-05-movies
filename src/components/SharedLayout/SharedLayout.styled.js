import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: ${p => p.theme.space[5]};
  border-bottom: 2px solid ${p => p.theme.colors.border};
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const List = styled.ul`
  display: flex;
  align-self: center;
  column-gap: ${p => p.theme.space[5]};
`;

export const Link = styled(NavLink)`
  padding: ${p => p.theme.space[3]};
  color: inherit;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;

  &.active {
    background-color: ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radii.normal};
  }
`;
