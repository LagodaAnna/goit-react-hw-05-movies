import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]};
  }
`;

export const Link = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
  color: inherit;
  transition: color 250ms;
  &:visited {
    color: ${p => p.theme.colors.secondaryText};
  }

  &:hover:not(:visited),
  &:focus:not(:visited) {
    color: ${p => p.theme.colors.accent};
  }
`;
