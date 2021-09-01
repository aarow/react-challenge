import React, { useState } from "react";
import { connect } from "react-redux";

import { setCurrentStepFilter } from '../redux/actions/stepsActions'

const mapStateToProps = (state) => {
  return {
    stepList: state.steps.stepList,
    currentStepFilter: state.steps.currentStepFilter
  };
};

function ConnectedSideNav(props) {
  const { stepList, currentStepFilter, dispatch } = props;

  const handleClick = filterKey => {
    dispatch(setCurrentStepFilter(filterKey));
  }

  return (
    <div>
      <nav>
        {Object.keys(stepList).map((filterKey, filterIndex) => {
          return (
            <li key={filterKey}>
              <button
                type="button"
                className={
                  filterKey === currentStepFilter
                    ? "rc--side-nav--item--active"
                    : "rc--side-nav--item"
                }
                onClick={() => handleClick(filterKey)}
              >
                {filterKey}
                {stepList[filterKey].totalCount > 0 && <>({stepList[filterKey].totalCount})</>}
              </button>
            </li>
          )
        })}
      </nav>
    </div>
  );
}

const SideNav = connect(mapStateToProps)(ConnectedSideNav);

export default SideNav;
