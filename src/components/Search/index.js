import React, { useState } from 'react'

import * as S from './styled'

const Search = () => {

  const [filter, setFilter] = useState('');

  return (
    <S.SearchWrapper>
      <S.Input value={filter} onChange={(e) => setFilter(e.target.value)} type="text" placeholder="Search for a country..." />
      <S.IconSearch />
    </S.SearchWrapper>
  );
}

export default Search
