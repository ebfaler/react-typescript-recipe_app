import React, { useEffect, useState } from 'react';
import AppProps from './AppProps';
import Post from './Post';

const Caribbean: React.FC<{ postsCategory1: AppProps[] | undefined }> = ({ postsCategory1 }) => {
    if (!postsCategory1) {
        return <div>Sorry, can't find posts</div>
    }
    return (
        <>
            <h1>Our Popular Caribbean Picks</h1>
            {postsCategory1.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </>


    )
}
export default Caribbean;