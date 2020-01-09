import React from 'react';

import * as S from './styled';

const Filter = props => {
 

  return (
    <S.FilterWrapper>
      <S.IconArrowDown />
      <S.FilterTitle>Filter by Region</S.FilterTitle>
      <S.FilterList>
        <S.FilterOption>America</S.FilterOption>
        <S.FilterOption>America</S.FilterOption>
        <S.FilterOption>America</S.FilterOption>
        <S.FilterOption>America</S.FilterOption>
      </S.FilterList>
    </S.FilterWrapper>
  );
}

export default Filter;
