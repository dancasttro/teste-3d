import React from 'react'

import GlobalStyle from '../../styles/global'
import * as S from './styled'

const Layout = ({ children }) => {

  return (
    <S.LayoutWrapper>
      <S.LayoutMain>{children}</S.LayoutMain>
      <GlobalStyle />
    </S.LayoutWrapper>
  );
}


export default Layout