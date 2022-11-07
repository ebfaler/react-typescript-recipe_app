import React from 'react';

interface Props {
    feed: string;
    //I hovered over setSearch in App.js to find the type
    setFeed: React.Dispatch<React.SetStateAction<string>>;

}


// previously tried const Search = ({ search }: { search: string }, { setSearch }: { setSearch: (s: string) => void })
const Feed = ({ feed, setFeed }: Props) => {
    return (
        <div>{feed}</div>
    )
}

export default Feed;