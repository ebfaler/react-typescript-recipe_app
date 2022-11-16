import React from 'react';
import AppProps from './AppProps';
import Post from './Post';
// interface Props {
//     feed: string;
//     //I hovered over setSearch in App.js to find the type
//     // setFeed: React.Dispatch<React.SetStateAction<string>>;

// }


//   setting the type of posts to an 'AppProps' array
const Feed: React.FC<{ posts: AppProps[] | undefined }> = ({ posts }) => {
    if (!posts) {
        return <div>Sorry, can't find posts</div>
    }

    console.log("posts:" + posts);
    return (
        <>
            <h1>Our Popular Picks</h1>

            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </>


    )
}

export default Feed;