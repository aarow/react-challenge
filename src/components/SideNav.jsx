import React, { useState } from 'react';

const navData = [
    { title: "All Candidates", count: 2 },
    { title: "Paperwork", count: 1 },
    { title: "Background Check", count: 0 },
    { title: "Drug Test", count: 4 }
]

export default function SideNav(props) {
    const [activeFilterItem, setActiveFilterItem] = useState(0);

    return <div>
        <nav>
            {navData.map((filterItem, filterIndex) =>
                <li key={filterItem.title}>
                    <button
                        type="button"
                        className={filterIndex === activeFilterItem
                            ? "rc--side-nav--item--active"
                            : "rc--side-nav--item"
                        }
                        onClick={e => setActiveFilterItem(filterIndex)}>
                        {filterItem.title}
                        {filterItem.count > 0 && <>({filterItem.count})</>}
                    </button>
                </li>
            )}

        </nav>
    </div>
}