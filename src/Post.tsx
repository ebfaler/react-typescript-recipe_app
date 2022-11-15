import React from 'react';
import AppProps from './AppProps';
import { Link } from 'react-router-dom';



const Post: React.FC<{ post: AppProps | undefined }> = ({ post }) => {
    if (!post) {
        return <div>empty</div>
    }

    return (
        <div className="posts">
            <Link to={`/post/${post.id}`}>

                <h2>{post.title}</h2>
                <img src={post.image} alt="image of food" />
            </Link>

        </div>
    )
}

export default Post;