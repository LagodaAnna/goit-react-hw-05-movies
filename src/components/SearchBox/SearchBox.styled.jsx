import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: ${p => p.theme.space[5]};
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[3]};
  margin-right: ${p => p.theme.space[4]};
  width: 300px;
  border-radius: ${p => p.theme.radii.normal};
  outline: none;
`;

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
