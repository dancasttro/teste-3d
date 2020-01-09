import styled from 'styled-components'
import { Moon } from 'styled-icons/fa-regular/Moon'


export const BtnDarkMode = styled.button`
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: none;
  font-size: 14px;
  margin-left: 10px;
`;

export const IconMoon = styled(Moon)`
  width: 14px;
`;

export const BtnDarkModeWrapper = styled.div`
  float: right;
`;
