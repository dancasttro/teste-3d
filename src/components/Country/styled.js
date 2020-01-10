import styled from 'styled-components'
import media from 'styled-media-query'

export const CountryWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-gap: 60px;

  ${media.lessThan("1024px")`
    grid-gap: 30px;
  `}

  ${media.lessThan("940px")`
    grid-template-columns: repeat(3, 200px);
    grid-gap: 30px;
  `}

  ${media.lessThan("medium")`
    grid-template-columns: repeat(2, 200px);
  `}

  ${media.lessThan("small")`
    grid-template-columns: repeat(1, 240px);
  `}
`;

export const CountryItem = styled.section`
  background-color: ${({ theme }) => theme.bkgElements};
  border-radius: 5px;
`;

export const CountryImg = styled.img`
  border-radius: 5px 5px 0px 0px;
  width: 100%;
`;

export const CountryImgWrapper = styled.div`
  width: 200px;

  ${media.lessThan("small")`
    width: 240px;
  `}
`;

export const CountryInfo = styled.div`
  padding: 20px;
`;
  
export const CountryListInfo = styled.ul`
  margin-top: 20px;
`;

export const CountryTitle = styled.h1`
  font-size: 16px;
`;

export const CountryInfoItem = styled.li`
  margin: 5px 0;
`;

export const CountryInfoTitle = styled.span`
  font-weight: 800;
`;