import React from 'react'
import Search from '../Search'
import Filter from '../Filter'
import Countries from '../Countries'

import * as S from './styled'


const Container = () => (
  <S.ContainerWrapper>
    <S.ContainerHeader>
      <Search />
      <Filter />
    </S.ContainerHeader>
    <Countries />
  </S.ContainerWrapper>
);

export default Container