import styled from 'styled-components'
import { KeyboardArrowDown } from 'styled-icons/material/KeyboardArrowDown'

export const FilterWrapper = styled.div`
  float: right;
  position: relative;
  /* border-radius: 5px;
  box-shadow: 0 0 5px 0 #ccc;
  padding: 15px 50px 15px 25px; */
`;

export const FilterTitle = styled.span`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bkgElements};
  box-shadow: 0 0 5px 0 ${({ theme }) => theme.body};
  padding: 15px 50px 15px 25px;
  display: block;
`;

export const FilterList = styled.ul`
  margin-top: 5px;
  background-color: ${({ theme }) => theme.bkgElements};
  border-radius: 5px;
  box-shadow: 0 0 5px 0 ${({ theme }) => theme.body};
  padding: 15px 50px 15px 25px;
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
  top: 15px;
`;
