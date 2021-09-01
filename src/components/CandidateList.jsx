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
    candidateFilter: state.candidates.candidateFilter.toLowerCase(),
    currentStepFilter: state.steps.currentStepFilter,
  };
};

export function ConnectedCandidateList(props) {
  const { candidateList, currentStepFilter, candidateFilter } = props;

  useEffect(() => {
    props.dispatch(fetchCandidateList);
  }, []);

  const handleUpdateCandidateStep = (step, candidate) => {
    console.log(step, candidate);
    props.dispatch(updateCandidateStep({
      ...candidate,
      step
    }));
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
                <td>{candidate.name}</td>
                <td>{format(new Date(), "EEEE, MMM d")}</td>
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
  return (
    <select defaultValue={step} onChange={e => onChange(e.currentTarget.value)}>
      <option value="">Choose Step</option>
      <option value="Paperwork">Paperwork</option>
      <option value="Background Check">Background Check</option>
      <option value="Drug Test">Drug Test</option>
    </select>
  );
}

const CandidateList = connect(mapStateToProps)(ConnectedCandidateList);

export default CandidateList;
