import styled from 'styled-components'
import { Search } from 'styled-icons/octicons/Search'


export const SearchWrapper = styled.div`
  position: relative;
  float: left;
`

export const IconSearch = styled(Search)`
  color: ${({ theme }) => theme.text};
  width: 15px;
  position: absolute;
  left: 20px;
  top: 50%;
  margin-top: -8px;
`;

export const Input = styled.input`
  width: 300px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 ${({ theme }) => theme.body};
  padding: 18px 25px 18px 50px;
  background-color: ${({ theme }) => theme.bkgElements};
`;