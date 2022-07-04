import styled from  'styled-components';
import {Link} from "react-router-dom";

export const IssueListItemLink = styled(Link)`
  text-decoration: none;
  margin: 50px 50px;
  color: black;
  &:hover{
    color: rgb(3, 169, 244);
  }
`;

export const IssuesListContainerStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;