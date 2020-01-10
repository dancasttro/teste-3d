import styled from 'styled-components'
import media from 'styled-media-query'

export const CountriesWrapper = styled.section`
  width: 100%;
  float: left;
  margin-top: 40px;


  ${media.lessThan("small")`
    margin-top: 20px;
  `}
`;