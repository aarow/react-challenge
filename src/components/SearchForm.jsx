import React, { useState } from 'react';
import { connect } from "react-redux";
import SearchIcon from '@material-ui/icons/Search';

import {
    setCandidateFilter,
} from "../redux/actions/candidateActions";

const SEARCH_PLACEHOLDER = `Start typing to filter by name...`


const mapStateToProps = (state) => {
    return {
        candidateFilter: state.candidates.candidateFilter
    };
};

export function ConnectedSearchForm(props) {
    const { candidateFilter, dispatch } = props;
    const iconStyle = { transform: "scaleX(-1)" }

    const handleChange = e => {
        dispatch(setCandidateFilter(e.currentTarget.value));
    }

    const handleKeyDown = e => {
        if (e.key === "Escape") {
            dispatch(setCandidateFilter(""));
        }
    }

    return (
        <div className="rc--search--input--group">
            <SearchIcon htmlColor="#BBBBBB" fontSize="small" style={iconStyle} />
            <input type="search" className="rc--search--input" onKeyDown={handleKeyDown} onChange={handleChange} value={candidateFilter} placeholder={SEARCH_PLACEHOLDER} />
        </div>
    )
}

const SearchForm = connect(mapStateToProps)(ConnectedSearchForm);

export default SearchForm;