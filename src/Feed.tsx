import React from 'react';
import AppProps from './AppProps';
import Post from './Post';

//   setting the type of posts to an 'AppProps' array
const Feed: React.FC<{ posts: AppProps[] | undefined }> = ({ posts }) => {
    if (!posts) {
        return <div>Sorry, can't find posts</div>
    }
    return (
        <>
            <h1 className='feed-header'>Our Popular Picks</h1>

            <div className="feed-div">

                {posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </>


    )
}

export default Feed;