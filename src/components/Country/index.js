import React, { useEffect, useState } from 'react'
// import axios from 'axios';

import * as S from './styled'

const Country = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await response.json();

      setData(data);
    }
    fetchData();
  }, [])

  return (
    <S.CountryWrapper>
      {data.map(item => (
        <S.CountryItem>
          <S.CountryImg src={item.flag} alt="test" />
          <S.CountryInfo>
            <S.CountryTitle>{item.name}</S.CountryTitle>
            <S.CountryListInfo>
              <S.CountryInfoItem>
                <S.CountryInfoTitle>Population:</S.CountryInfoTitle> {item.population}
              </S.CountryInfoItem>
              <S.CountryInfoItem>
                <S.CountryInfoTitle>Region:</S.CountryInfoTitle> {item.region}
              </S.CountryInfoItem>
              <S.CountryInfoItem>
                <S.CountryInfoTitle>Capital:</S.CountryInfoTitle> {item.capital}
              </S.CountryInfoItem>
            </S.CountryListInfo>
          </S.CountryInfo>
        </S.CountryItem>
      ))}
    </S.CountryWrapper>
  );
};


export default Country