import React, { useState } from 'react';
import { connect } from "react-redux";
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

    const handleChange = e => {
        dispatch(setCandidateFilter(e.currentTarget.value));
    }

    return (
        <div>
            <input type="search" className="rc--search--input" onChange={handleChange} value={candidateFilter} placeholder={SEARCH_PLACEHOLDER} />
        </div>
    )
}

const SearchForm = connect(mapStateToProps)(ConnectedSearchForm);

export default SearchForm;