import styled from  'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface StyledProps {
  image: string
}

export const IssueDetailItemContainerStyle = styled.div`
  display:flex;
  justify-content: center;
`;

export const GoBackIconStyle = styled(FontAwesomeIcon)`
  font-size: 2rem;
  :hover {
    color: rgb(3, 169, 244);
    cursor: pointer;
  }
`;

export const IssueDetailItemStyle = styled.div`
  padding: 25px;
  margin-top: 50px;
  border-radius: 20px;
  background: white;
  width: 50%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export  const IssueDetailItemInfoStyle = styled.div`
  display:flex;
  padding: 25px;
`;

export const ItemDetailIssueTitle = styled.h1`
  text-transform: capitalize;
  margin: 0;
  color:rgb(3, 169, 244);
  padding: 0;
  display:flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
`;

export const ItemDetailIssueDescription = styled.p`
  text-transform: capitalize;
  margin: 20px;
  display: flex;
  align-items: flex-end;
  padding: 0;
`;

export const ItemDetailIssueImage = styled.div<StyledProps>`
  border-radius: 5%;
  height: 500px;
  min-width: 500px;
  background-size: cover;
  border: 1px solid black;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center 15%;
`;