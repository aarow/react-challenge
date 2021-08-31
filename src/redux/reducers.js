import { combineReducers } from "redux";
import {
  SET_CANDIDATE_LIST,
  UPDATE_CANDIDATE_STEP,
} from "./actions/candidateActions";
import { SET_STEP_LIST } from "./actions/stepsActions";

const candidateState = {
  candidateList: [],
};

export function candidates(state = candidateState, action) {
  console.log("candidates:", action.type, action.payload);

  switch (action.type) {
    case SET_CANDIDATE_LIST:
      return {
        ...state,
        candidateList: action.payload,
      };

    case UPDATE_CANDIDATE_STEP:
      return {
        ...state,
        candidateList: [
          ...state.candidateList.map((candidate) => {
            if (candidate.name === action.payload.name) {
              return action.payload;
            } else {
              return candidate;
            }
          }),
        ],
      };
    default:
      return state;
  }
}

const stepsState = {
  stepList: [],
};

export function steps(state = stepsState, action) {
  switch (action.type) {
    case SET_STEP_LIST:
      return {
        ...state,
        stepList: action.payload,
      };
    default:
      return state;
  }
}

export default combineReducers({
  candidates,
  steps,
});
