import React from 'react';
import AppProps from './AppProps';
//useParams hook to get the post id from the url
import { useParams, Link } from "react-router-dom";

import ReactMarkdown from 'react-markdown';

const PostPage: React.FC<{ posts: AppProps[] | undefined }> = ({ posts }) => {

    //i named the parameter id in App.js
    const { id } = useParams();

    if (!posts) {
        return <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
                <Link to='/'>Visit Our Homepage</Link>
            </p>
        </>
    }
    //display the individual specific post (where the id from useParams matches the post id)


    const post = posts.find(post => (post.id).toString() === id);
    if (!post) {
        return <h2>Post not found!</h2>
    }

    // const split = post.instructions.split(',');
    // console.log("split:" + split);



    return (

        <main className="PostPage">
            <article className="post">

                <h2>{post.title}</h2>
                <img className="postImage" src={post.image} />
                <p className="postServings"> Serves: {post.servings}</p>
                {/* <p className="postIngredients">{post.extendedIngredients}</p> */}


                <ReactMarkdown className="postInstructions">{post.instructions}</ReactMarkdown>
                <p className="postVegan">Vegan:{post.vegan.toString()}</p>
                <p className="postVegetarian">Vegetarian:{post.vegetarian.toString()}</p>
                <p className="postHealthy">Very Healthy: {post.veryHealthy.toString()}</p>
                <p className="postPopular">Very Popular:{post.veryPopular.toString()}</p>
            </article>
        </main>
    )
}

export default PostPage;