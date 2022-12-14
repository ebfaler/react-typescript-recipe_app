import React from 'react'


interface Props {
    search: string;
    //hovered over setSearch in App.js to find the type
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}


// previously tried const Search = ({ search }: { search: string }, { setSearch }: { setSearch: (s: string) => void })
const Search = ({ search, setSearch }: Props) => {
    console.log(search);
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label className="search_label" htmlFor='search'> Search</label>

            <input
                id='search'
                type='text'
                role='searchBox'
                placeholder='Search Items'
                value={search}
                //here we set the search state with setSearch
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default Search;