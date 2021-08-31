import ReduxThunk from "redux-thunk";

const CANDIDATE_DATA_URL = `https://my-json-server.typicode.com/workstep/react-challenge-data/candidates`;

export function fetchCandidateList(dispatch) {
  return axios.get(CANDIDATE_DATA_URL).then(({ data }) => {
    dispatch(data);
  });
}
