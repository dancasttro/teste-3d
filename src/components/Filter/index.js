import React, { useState } from 'react';

import * as S from './styled';

const Filter = props => {
  
  const [ isOpen, toggleIsOpen ] = useState(false);

  return (
    <S.FilterWrapper>
      <S.IconArrowDown />
      <S.FilterTitle onClick={() => toggleIsOpen(!isOpen)}>
        Filter by Region
      </S.FilterTitle>
      {isOpen && (
        <S.FilterList>
          <S.FilterOption>Africa</S.FilterOption>
          <S.FilterOption>America</S.FilterOption>
          <S.FilterOption>Asia</S.FilterOption>
          <S.FilterOption>Europa</S.FilterOption>
          <S.FilterOption>Oceania</S.FilterOption>
        </S.FilterList>
      )}
    </S.FilterWrapper>
  );
}

export default Filter;
