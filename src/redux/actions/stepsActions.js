export const GET_STEP_LIST = 'GET_STEP_LIST';

export async function getStepList() {
    return {
        type: GET_STEP_LIST,
        payload: []
    };
}
