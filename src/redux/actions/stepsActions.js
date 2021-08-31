export const SET_STEP_LIST = "GET_STEP_LIST";

export async function setStepList(stepList = []) {
  return {
    type: SET_STEP_LIST,
    payload: stepList,
  };
}
