import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { format } from "date-fns";

import {
  fetchCandidateList,
  updateCandidateStep,
} from "../redux/actions/candidateActions";

const mapStateToProps = (state) => {
  return {
    candidateList: state.candidates.candidateList,
  };
};

export function ConnectedCandidateList(props) {
  const { candidateList } = props;

  useEffect(() => {
    props.dispatch(fetchCandidateList);
  }, []);

  const handleUpdateCandidateStep = (candidate) => {
    props.dispatch(updateCandidateStep(candidate));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Date Interviewed</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {candidateList.map((candidate) => (
            <tr key={candidate.name}>
              <td>{candidate.name}</td>
              <td>{format(new Date(), "EEEE, MMM d")}</td>
              <td>
                <StepDropdown
                  step={candidate.step}
                  handleChange={(candidate) =>
                    handleUpdateCandidateStep(candidate)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StepDropdown({ step, handleChange }) {
  return (
    <select defaultValue={step} onChange={handleChange}>
      <option value="">Choose Step</option>
      <option value="Paperwork">Paperwork</option>
      <option value="Background Check">Background Check</option>
      <option value="Drug Test">Drug Test</option>
    </select>
  );
}

const CandidateList = connect(mapStateToProps)(ConnectedCandidateList);

export default CandidateList;
