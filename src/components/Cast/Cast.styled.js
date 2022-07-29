import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${p => p.theme.space[5]};
  column-gap: ${p => p.theme.space[5]};
`;

export const ListItem = styled.li`
  max-width: 177px;
`;

export const Image = styled.img`
  margin-bottom: ${p => p.theme.space[3]};
`;

export const Name = styled.p`
  margin-bottom: ${p => p.theme.space[2]};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
