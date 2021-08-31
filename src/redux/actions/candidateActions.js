import axios from "axios";

export const FETCH_CANDIDATE_LIST = "FETCH_CANDIDATE_LIST";
export const SET_CANDIDATE_LIST = "SET_CANDIDATE_LIST";
export const UPDATE_CANDIDATE_STEP = "UPDATE_CANDIDATE_STEP";

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
  });
}

export function setCandidateList(data) {
  return {
    type: SET_CANDIDATE_LIST,
    payload: data,
  };
}
