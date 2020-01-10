import styled from 'styled-components'
import media from 'styled-media-query'

export const ContainerWrapper = styled.section`
  width: 980px;
  margin: 0 auto;
  height: calc(100vh - 63px);
  padding-top: 40px;

  ${media.lessThan("1024px")`
    width: 890px;
  `}

  ${media.lessThan("940px")`
    width: 660px;
  `}

  ${media.lessThan("medium")`
    width: 430px;
  `}

  ${media.lessThan("small")`
    width: 240px;
  `}
`;

export const ContainerHeader = styled.div`
  width: 100%;
  float: left;
`;
