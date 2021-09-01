import {
  SET_CANDIDATE_LIST,
  UPDATE_CANDIDATE_STEP,
  SET_CANDIDATE_FILTER
} from "../actions/candidateActions";

const candidateState = {
  candidateList: [],
  candidateFilter: ""
};

export default function candidates(state = candidateState, action) {
  // console.log("candidates:", action.type, action.payload);

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
