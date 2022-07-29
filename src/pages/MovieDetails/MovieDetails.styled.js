import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  display: inline-block;

  padding: ${p => p.theme.space[3]};
  margin-bottom: ${p => p.theme.space[5]};
  width: 120px;
  border-radius: ${p => p.theme.radii.normal};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: inherit;
  text-align: center;
  text-decoration: none;
  background-color: ${p => p.theme.colors.border};
  border-color: ${p => p.theme.colors.border};
  transition: box-shadow 250ms;

  &:hover {
    box-shadow: ${p => p.theme.shadows.hover};
  }
`;

export const Poster = styled.img`
  margin-right: ${p => p.theme.space[5]};
`;

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.space[4]};
  text-align: center;
`;

export const Score = styled.p`
  margin-bottom: ${p => p.theme.space[4]};
`;

export const OverviewTitle = styled.p`
  margin-bottom: ${p => p.theme.space[4]};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Overview = styled.p`
  margin-bottom: ${p => p.theme.space[4]};
`;

export const GenresTitle = styled.p`
  margin-bottom: ${p => p.theme.space[4]};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const List = styled.ul`
  margin-bottom: ${p => p.theme.space[4]};
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]};
  }
`;

export const Link = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
  color: ${p => p.theme.colors.links};
  transition: color 250ms;

  &.active {
    color: ${p => p.theme.colors.accent};
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;
