export const SET_CURRENT_STEP_FILTER = "SET_CURRENT_STEP_FILTER";
export const SET_STEP_LIST = "GET_STEP_LIST";
export const INCREMENT_STEP = 'INCREMENT_STEP';
export const DECREMENT_STEP = 'DECREMENT_STEP';

export function setCurrentStepFilter(currentFilter = "All Candidates") {
  return {
    type: SET_CURRENT_STEP_FILTER,
    payload: currentFilter,
  };
}

export function setStepList(stepList = {}) {
  return {
    type: SET_STEP_LIST,
    payload: stepList,
  };
}

export function incrementStep(step) {
  return {
    type: INCREMENT_STEP,
    payload: step
  }
}

export function decrementStep(step) {
  return {
    type: DECREMENT_STEP,
    payload: step
  }
}

export function buildStepList(candidateList) {
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

  filterList["All Candidates"] = {
    totalCount: candidateList.length
  };

  return {
    type: SET_STEP_LIST,
    payload: filterList,
  }
}