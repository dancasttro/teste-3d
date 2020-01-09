import React from 'react'

import * as S from './styled'

const ToggleTheme = ({ theme, toggleTheme }) => {
  return (
    <S.BtnDarkModeWrapper>
      <S.IconMoon />
      <S.BtnDarkMode onClick={toggleTheme}>
        Dark Mode
      </S.BtnDarkMode>
    </S.BtnDarkModeWrapper>
  );
};

export default ToggleTheme;
