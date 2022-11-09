import React from 'react';
import AppProps from './AppProps';
import Post from './Post';
// interface Props {
//     feed: string;
//     //I hovered over setSearch in App.js to find the type
//     // setFeed: React.Dispatch<React.SetStateAction<string>>;

// }


//  setting the type of feed
const Feed: React.FC<{ feed: AppProps[] | undefined }> = ({ feed }) => {
    if (!feed) {
        return <div>empty</div>
    }
    return (
        <>
            <h1>Our Popular Picks</h1>
            {feed.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </>


    )
}

export default Feed;