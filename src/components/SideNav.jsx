import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import TuneIcon from '@material-ui/icons/Tune';

import { setCurrentStepFilter } from '../redux/actions/stepsActions'

const mapStateToProps = (state) => {
  return {
    stepList: state.steps.stepList,
    currentStepFilter: state.steps.currentStepFilter
  };
};

function ConnectedSideNav(props) {
  const { stepList, currentStepFilter, dispatch } = props;
  const [showNav, toggleShowNav] = useState(false);
  const sideNavRef = useRef(null);


  const handleClick = filterKey => {
    dispatch(setCurrentStepFilter(filterKey));
  }

  const handleOutsideClick = e => {
    if (!sideNavRef.current.contains(e.target)) {
      toggleShowNav(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className={`rc--side-nav--group ${showNav ? 'show' : ''}`} ref={sideNavRef}>
      <button onClick={() => toggleShowNav(!showNav)} type="button" className="rc--side-nav--toggle" aria-label="Show Filter">
        <TuneIcon htmlColor="#BBBBBB" />
      </button>
      <nav className={`rc--side-nav `}>
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
                <span className="rc--side-nav--item--title">{filterKey}</span>
                {stepList[filterKey].totalCount > 0 && <span>({stepList[filterKey].totalCount})</span>}
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
