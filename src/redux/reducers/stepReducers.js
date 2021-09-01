
import { SET_CURRENT_STEP_FILTER, SET_STEP_LIST, INCREMENT_STEP, DECREMENT_STEP } from "../actions/stepsActions";

const stepsState = {
  stepList: [],
  currentStepFilter: "All Candidates"
};

export default function steps(state = stepsState, action) {
  // console.log(state, action.type, action.payload);

  switch (action.type) {
    case INCREMENT_STEP:
      if(action.payload === '') return state;
      
      return {
        ...state,
        stepList: {
          ...state.stepList,
          [action.payload]: {
            totalCount: state.stepList[action.payload].totalCount + 1
          }
        }
      };
    case DECREMENT_STEP:
      if(action.payload === '') return state;

      return {
        ...state,
        stepList: {
          ...state.stepList,
          [action.payload]: {
            totalCount: state.stepList[action.payload].totalCount - 1
          }
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
