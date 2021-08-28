import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchCandidateList } from '../redux/actions/candidateActions';

const mapStateToProps = state => {
    return { candidateList: state.candidateList };
};

export function ConnectedCandidateList({ candidateList }) {
    console.log(candidateList);
    return <div>CandidateList</div>
}

const CandidateList = connect(mapStateToProps)(ConnectedCandidateList);

export default CandidateList;