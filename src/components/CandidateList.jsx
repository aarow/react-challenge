import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { format } from "date-fns";

import {
  fetchCandidateList,
  updateCandidateStep,
} from "../redux/actions/candidateActions";

import {
  incrementStep, decrementStep
} from "../redux/actions/stepsActions";

const mapStateToProps = (state) => {
  return {
    candidateList: state.candidates.candidateList,
    candidateFilter: state.candidates.candidateFilter.toLowerCase(),
    currentStepFilter: state.steps.currentStepFilter,
  };
};

export function ConnectedCandidateList(props) {
  const { dispatch, candidateList, currentStepFilter, candidateFilter } = props;

  useEffect(() => {
    dispatch(fetchCandidateList);
  }, []);

  const handleUpdateCandidateStep = (step, candidate) => {
    // console.log(step, candidate);
    dispatch(updateCandidateStep({
      ...candidate,
      step
    }));

    dispatch(decrementStep(candidate.step));
    dispatch(incrementStep(step));
  };

  const filterByCurrentStep = (candidate) => {
    if (currentStepFilter === "All Candidates") return true;
    return currentStepFilter === candidate.step;
  }

  const filterByCandidateName = candidate => {
    if (candidateFilter.trim() === "") return true;
    return candidate.name.toLowerCase().indexOf(candidateFilter) > -1;
  }

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
          {candidateList
            .filter(filterByCurrentStep)
            .filter(filterByCandidateName)
            .map((candidate) => (
              <tr key={candidate.name}>
                <td>
                  <span className="rc-table--inline-label">Candidate: </span>
                  {candidate.name}</td>
                <td>
                  <span className="rc-table--inline-label">Date Interviewed: </span>
                  {format(new Date(), "EEE, MMM d")}</td>
                <td>
                  <StepDropdown
                    step={candidate.step}
                    onChange={(step) =>
                      handleUpdateCandidateStep(step, candidate)
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

function StepDropdown({ step, onChange }) {
  const handleChange = e => {
    onChange(e.currentTarget.value);
  }

  return (
    <div className="rc-select">
      <select className="rc-select--control" defaultValue={step} onChange={handleChange} data-value={step}  >
        <option value="">Choose Step</option>
        <option value="Paperwork">Paperwork</option>
        <option value="Background Check">Background Check</option>
        <option value="Drug Test">Drug Test</option>
      </select>
    </div>
  );
}

const CandidateList = connect(mapStateToProps)(ConnectedCandidateList);

export default CandidateList;
