import React, { useContext, useRef } from 'react';
import axios from 'axios';
import { IssuesContext } from '../context/IssuesContext';
import {SearchbarNavStyle, SearchbarStyle, LogoStyle} from '../styles/searchBarStyle';
import { Types } from '../reducers/reducers';
import _ from "lodash";


const SearchBar: any = () => {
  const { dispatch } = useContext(IssuesContext);
  const filterIssues = (value: any) =>{
    axios.get(`http://localhost:5000/issues?q=${value}`).then(resp => dispatch({
      type: Types.getList,
      payload: resp.data
    })
    );
  }
  const delayedQuery = useRef(_.debounce((value:string) => filterIssues(value), 500)).current;
  const onChange = (e:any) => {
    delayedQuery(e.target.value);
  }
  
  return (
    <SearchbarNavStyle>
      <LogoStyle>ZINIO</LogoStyle>
    <SearchbarStyle type="text" onChange={onChange} placeholder="Type to filter issues"/>
    </SearchbarNavStyle>
      );
      }

export default SearchBar;