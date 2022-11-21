import React from 'react';
import AppProps from './AppProps';
import { Link } from 'react-router-dom';
import posts from './api/posts';




const Post: React.FC<{ post: AppProps | undefined }> = ({ post }) => {
    if (!post) {
        return <div>empty</div>
    }

    return (
        <div className="posts">
            <Link to={`/post/${post.id}`}>

                <h2 className='post-title'>{post.title}</h2>
                <img src={post.image} alt="image of food" />

                {/* if the post is more than 25 characters, only show the first 25 characters and an ellipsis(...) */}

                <p dangerouslySetInnerHTML={{

                    __html: (post.summary).length <= 100
                        ? post.summary
                        : `${(post.summary).slice(0, 100)}...`
                }} />


            </Link>

        </div>
    )
}

export default Post;