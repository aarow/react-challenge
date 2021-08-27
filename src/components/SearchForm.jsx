import React, {useState} from 'react';

const SEARCH_PLACEHOLDER = `Start typing to filter by name...`

export default function SearchForm(props) {
    const [query, setQuery] = useState("")

    return (
        <div>
            <input type="search" className="rc--search--input" onChange={e => setQuery(e.currentTarget.value)} value={query} placeholder={SEARCH_PLACEHOLDER} />
        </div>
    )
}