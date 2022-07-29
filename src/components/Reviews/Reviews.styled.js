import styled from 'styled-components';

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[5]};
  }
`;

export const Author = styled.p`
  margin-bottom: ${p => p.theme.space[3]};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
