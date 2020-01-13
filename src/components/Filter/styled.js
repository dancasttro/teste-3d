import styled from 'styled-components'
import { KeyboardArrowDown } from 'styled-icons/material/KeyboardArrowDown'
import media from 'styled-media-query'

export const FilterWrapper = styled.div`
  float: right;
  position: relative;

   ${media.lessThan("small")`
    float: left;
    left: -30px;
    top: -10px;
  `}
`;

export const FilterTitle = styled.button`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bkgElements};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 0 5px 0 ${({ theme }) => theme.body};
  padding: 18px 50px 18px 25px;
  display: block;
  border: none;
`;

export const FilterList = styled.ul`
  margin-top: 5px;
  background-color: ${({ theme }) => theme.bkgElements};
  border-radius: 5px;
  box-shadow: 0 0 5px 0 ${({ theme }) => theme.body};
  padding: 18px 50px 18px 25px;
  position: absolute;
  width: 100%;
`;

export const FilterOption = styled.li`
  margin: 5px 0;
`;

export const IconArrowDown = styled(KeyboardArrowDown)`
  color: #757575;
  position: absolute;
  width: 20px;
  right: 8px;
  top: 16px;
`;
