import { ItemIssueImage, IssueListItemStyle, ItemIssueTitle } from '../styles/IssueListItemStyle';
const IssueListItem = ({name= '', cover_image= '' }) => {
  return (
    <IssueListItemStyle>
      <ItemIssueImage image={cover_image}/>
      <ItemIssueTitle>{name}</ItemIssueTitle>
    </IssueListItemStyle>
  );
}
export default IssueListItem;