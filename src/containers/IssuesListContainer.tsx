
import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import issueInterface from '../models/issueInterface';
import IssueListItem from '../components/IssueListItem';
import { IssuesListContainerStyle, IssueListItemLink } from '../styles/IssueListContainerStyle';
import { IssuesContext } from '../context/IssuesContext';
import { Types } from '../reducers/reducers';
import SearchBar from '../components/SearchBar';


const IssuesListContainer: any = () => {
 const {state, dispatch} = useContext(IssuesContext);
  useEffect(() => {
    axios.get('http://localhost:5000/issues').then(resp => dispatch({
      type: Types.getList,
      payload: resp.data
    })
    );
  }, [dispatch]);
  return (
    <div>
    <SearchBar/>
    <IssuesListContainerStyle>
      {state?.issues?.map((issue: issueInterface) => {
        const { name, cover_image, id } = issue;
        
        return <IssueListItemLink key={id} to={`issue/${id}`} ><IssueListItem name={name.toLowerCase()} cover_image={cover_image} /></IssueListItemLink>
      })}
    </IssuesListContainerStyle>
    </div>
  );
}

export default IssuesListContainer;