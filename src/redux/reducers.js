import { combineReducers } from "redux";
import {
  SET_CANDIDATE_LIST,
  UPDATE_CANDIDATE_STEP,
  SET_CANDIDATE_FILTER
} from "./actions/candidateActions";
import { SET_CURRENT_STEP_FILTER, SET_STEP_LIST, INCREMENT_STEP, DECREMENT_STEP } from "./actions/stepsActions";

const candidateState = {
  candidateList: [],
  candidateFilter: ""
};

export function candidates(state = candidateState, action) {
  console.log("candidates:", action.type, action.payload);

  switch (action.type) {
    case SET_CANDIDATE_FILTER:
      return {
        ...state,
        candidateFilter: action.payload
      }
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
  currentStepFilter: "All Candidates"
};

export function steps(state = stepsState, action) {
  switch (action.type) {
    case INCREMENT_STEP:
      return {
        ...state,
        stepList: {
          ...stepList,
          [action.payload]: stepList[action.payload] + 1
        }
      };
    case DECREMENT_STEP:
      return {
        ...state,
        stepList: {
          ...stepList,
          [action.payload]: stepList[action.payload] - 1
        }
      };
    case SET_STEP_LIST:
      return {
        ...state,
        stepList: action.payload,
      };
    case SET_CURRENT_STEP_FILTER:
      return {
        ...state,
        currentStepFilter: action.payload
      }
    default:
      return state;
  }
}

export default combineReducers({
  candidates,
  steps,
});
