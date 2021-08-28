import { takeEvery, call, put } from "redux-saga/effects";

const CANDIDATE_DATA_URL = `https://my-json-server.typicode.com/workstep/react-challenge-data/candidates`;


export default function* watcherSaga() {
    yield takeEvery("DATA_REQUESTED", workerSaga);
}

function* workerSaga() {
    try {
        const payload = yield call(fetchCandidateList);
        yield put({ type: "DATA_LOADED", payload });
    } catch (e) {
        yield put({ type: "API_ERRORED", payload: e });
    }
}


export function fetchCandidateList() {
    return axios.get(CANDIDATE_DATA_URL).then(({ data }) => data);
}