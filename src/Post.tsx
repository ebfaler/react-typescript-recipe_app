import React from 'react';
import AppProps from './AppProps';
import { Link } from 'react-router-dom';



const Post: React.FC<{ post: AppProps | undefined }> = ({ post }) => {
    if (!post) {
        return <div>empty</div>
    }

    return (
        <div className="post">

            <h2>{post.title}</h2>

            {/* <Link to > */}
            <img src={post.image} alt="image of food" />
            {/* if the post is more than 25 characters, only show the first 25 characters and an ellipsis(...) */}
            {/* </Link> */}
            {/* <p className="postBody">{
                (post.summary).length <= 100
                    ? post.summary
                    : `${(post.summary).slice(0, 100)}...`
            }</p> */}
        </div>
    )
}

export default Post;