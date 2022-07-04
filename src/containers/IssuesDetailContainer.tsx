
import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import {IssuesContext} from '../context/IssuesContext';
import { Types } from "../reducers/reducers";
import IssueDetailItem  from '../components/IssueDetailItem';


const IssuesListContainer: any = () => {
  const { state, dispatch } = useContext(IssuesContext);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/issues/${id}`).then(resp => dispatch({
      type: Types.getOne,
      payload: resp.data
    })
    );
  }, [dispatch, id]);
return (
  <IssueDetailItem name={state.issue.name} cover_image={state.issue.cover_image} description={state.issue.description}/>
);
}

export default IssuesListContainer;