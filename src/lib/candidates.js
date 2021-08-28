import axios from 'axios';

const CANDIDATE_DATA_URL = `https://my-json-server.typicode.com/workstep/react-challenge-data/candidates`;

export function getCandidateList() {
    const buildFilter = candidateList => {
        const filterList = candidateList.reduce((accumulator, currentCandidate) => {
            const newAccum = { ...accumulator };
            const currentStep = currentCandidate.step;

            // skip if no step
            if (currentStep.trim() === "") return newAccum;

            // update or create count for current step
            if (newAccum[currentStep]) {
                newAccum[currentStep].totalCount++;
            } else {
                newAccum[currentStep] = {
                    totalCount: 1
                }
            }

            return newAccum;
        }, { "All Candidates": { totalCount: 0 } });

        filterList["All Candidates"] = candidateList.length;

        console.log(filterList);
    }


    return axios.get(CANDIDATE_DATA_URL).then(({ data }) => {
        buildFilter(data);
        return data
    });
}

export function getCandidateDetail(id) {
    return axios.get(`${CANDIDATE_DATA_URL}/${id}`);
}