import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 100%;
  box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.bkgElements};
`;

export const Header = styled.div`
  padding: 20px 10px;
  max-width: 980px;
  margin: 0 auto;
  height: 60px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const H1 = styled.h1`
  float: left;
  display: block;
`

