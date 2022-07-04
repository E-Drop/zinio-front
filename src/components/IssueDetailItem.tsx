import { ItemDetailIssueImage, IssueDetailItemStyle, IssueDetailItemInfoStyle, ItemDetailIssueTitle, GoBackIconStyle, IssueDetailItemContainerStyle, ItemDetailIssueDescription } from '../styles/issueDetailItemStyle';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const IssueDetailItem = ({ name = '', cover_image = '', description = "" }) => {
  return (
    <IssueDetailItemContainerStyle>
      <IssueDetailItemStyle>
        <Link to="/">
          <GoBackIconStyle icon={faCircleArrowLeft} />
        </Link>
        <IssueDetailItemInfoStyle>
          <div>
            <ItemDetailIssueImage image={cover_image} />
            <ItemDetailIssueTitle>{name}</ItemDetailIssueTitle>
          </div>
          <ItemDetailIssueDescription>{description}</ItemDetailIssueDescription>
        </IssueDetailItemInfoStyle>
      </IssueDetailItemStyle>
    </IssueDetailItemContainerStyle>
  );
}
export default IssueDetailItem;