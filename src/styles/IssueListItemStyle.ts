import styled from  'styled-components';

interface StyledProps {
  image: string
}

export const IssueListItemStyle = styled.div`
  padding: 10px;
  border-radius: 5%;
  background: white;
  width: 270px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  &:hover {
    box-shadow: 2px 3px 50px rgb(3, 169, 244);
  }
`;

export const ItemIssueTitle = styled.h3`
  text-transform: capitalize;
  margin: 0;
  padding: 0;
  min-height: 120px;
  display:flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
`;

export const ItemIssueImage = styled.div<StyledProps>`
  border-radius: 5%;
  height: 220px;
  width: 220px;
  background-size: cover;
  border: 1px solid black;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center 15%;
`;