import { combineReducers } from 'redux';
import {FETCH_CANDIDATE_LIST} from './actions/candidateActions';


const candidateState = {
    candidateList:  []
}

export function candidates(state = candidateState, action) {
    if(action.type === FETCH_CANDIDATE_LIST) {
        return {
            ...state,
            candidateList: action.payload
        }
    }
    return state;
}


const stepsState = {
    stepsList: [],
}

export function steps(state = stepsState, action) {
    return state;
}


export default combineReducers({
    candidates,
    steps
})
