import axios from "axios";

import { buildStepList } from './stepsActions'

export const FETCH_CANDIDATE_LIST = "FETCH_CANDIDATE_LIST";
export const SET_CANDIDATE_LIST = "SET_CANDIDATE_LIST";
export const UPDATE_CANDIDATE_STEP = "UPDATE_CANDIDATE_STEP";
export const SET_CANDIDATE_FILTER = "SET_CANDIDATE_FILTER";

const CANDIDATE_DATA_URL = `https://my-json-server.typicode.com/workstep/react-challenge-data/candidates`;

export function updateCandidateStep(candidate) {
    return {
        type: UPDATE_CANDIDATE_STEP,
        payload: candidate,
    };
}

export function fetchCandidateList(dispatch) {
    return axios.get(CANDIDATE_DATA_URL).then(({ data }) => {
        dispatch(setCandidateList(data));
        dispatch(buildStepList(data));
    });
}

export function setCandidateList(data) {
    return {
        type: SET_CANDIDATE_LIST,
        payload: data,
    };
}

export function setCandidateFilter(query) {
    return {
        type: SET_CANDIDATE_FILTER,
        payload: query
    }
}