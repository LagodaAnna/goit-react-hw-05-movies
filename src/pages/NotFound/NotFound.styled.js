import styled from 'styled-components';

export const Button = styled.button`
  padding: ${p => p.theme.space[3]};
  width: 120px;
  border-radius: ${p => p.theme.radii.normal};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: inherit;
  background-color: ${p => p.theme.colors.border};
  border-color: ${p => p.theme.colors.border};
  transition: box-shadow 250ms;

  &:hover {
    box-shadow: ${p => p.theme.shadows.hover};
  }
`;

export const Message = styled.p`
  margin-bottom: ${p => p.theme.space[4]};
`;
