import React, { useState } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    stepList: state.steps.stepList,
  };
};

function ConnectedSideNav(props) {
  const { stepList } = props;
  const [activeFilterItem, setActiveFilterItem] = useState(0);

  return (
    <div>
      <nav>
        {stepList.map((filterItem, filterIndex) => (
          <li key={filterItem.title}>
            <button
              type="button"
              className={
                filterIndex === activeFilterItem
                  ? "rc--side-nav--item--active"
                  : "rc--side-nav--item"
              }
              onClick={(e) => setActiveFilterItem(filterIndex)}
            >
              {filterItem.title}
              {filterItem.count > 0 && <>({filterItem.count})</>}
            </button>
          </li>
        ))}
      </nav>
    </div>
  );
}

const SideNav = connect(mapStateToProps)(ConnectedSideNav);

export default SideNav;
