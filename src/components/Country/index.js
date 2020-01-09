import React, { useEffect, useState } from 'react'

import * as S from './styled'

const Country = () => {

  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();

    setData(data);
  }, []);

  return (
    <S.CountryWrapper>
      {data.map(item => (
        <S.CountryItem>
          <S.CountryImg src={item.flag} alt="test" />
          <S.CountryInfo>
            <S.CountryTitle>{item.name}</S.CountryTitle>
            <S.CountryListInfo>
              <S.CountryInfoItem>
                Population: {item.population}
              </S.CountryInfoItem>
              <S.CountryInfoItem>Region: {item.region}</S.CountryInfoItem>
              <S.CountryInfoItem>Capital: {item.capital}</S.CountryInfoItem>
            </S.CountryListInfo>
          </S.CountryInfo>
        </S.CountryItem>
      ))}
    </S.CountryWrapper>
  );
};


export default Country