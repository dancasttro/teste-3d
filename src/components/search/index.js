import React from 'react'

import * as S from './styled'

const Search = () => (
  <S.SearchWrapper>
    <S.Input type="text" placeholder="Search for a country..." />
    <S.IconSearch />
  </S.SearchWrapper>
);

export default Search