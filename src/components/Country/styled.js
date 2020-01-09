import styled from 'styled-components'

export const CountryWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 60px;
`;

export const CountryItem = styled.section`
  background-color: #fff;
  border-radius: 5px;
`;

export const CountryImg = styled.img`
  border-radius: 5px 5px 0px 0px;
  width: 200px;
`;

export const CountryInfo = styled.div`
  padding: 20px;
`;
  
export const CountryListInfo = styled.ul`
  margin-top: 20px;
`;


export const CountryTitle = styled.h1`
  font-size: 16px;
`
export const CountryInfoItem = styled.li`
  margin: 5px 0;
`

export const CountryInfoTitle = styled.span`
  font-weight: 800;
`;