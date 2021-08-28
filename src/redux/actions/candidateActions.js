import axios from 'axios';

export const FETCH_CANDIDATE_LIST = 'FETCH_CANDIDATE_LIST';

export function fetchCandidateList() {
    return { type: 'DATA_REQUESTED'}
}