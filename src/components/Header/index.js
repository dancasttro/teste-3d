import React from 'react'
import ToggleTheme from '../ToggleTheme'

import * as S from './styled'

const Header = ({ theme, toggleTheme }) => (
  <S.HeaderWrapper>
    <S.Header>
      <S.H1>Where in the world?</S.H1>
      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
    </S.Header>
  </S.HeaderWrapper>
);

export default Header
