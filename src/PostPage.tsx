import React from 'react';
import AppProps from './AppProps';
//useParams hook to get the post id from the url
import { useParams, Link } from "react-router-dom";

// import ReactMarkdown from 'react-markdown';

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

    //function to convert false/true string to no/yes strings
    function replaceString(value: string): string {

        if (value === "false") {
            return value.replace("false", "No")
        } else {

            return value.replace("true", "yes")
        }
    }

    console.log("testing:" + replaceString("false"))


    return (

        <main className="PostPage">
            <article className="post">

                <h2 className="postTitle">{post.title}</h2>
                <img className="postImage" id='postImage' src={post.image} />
                <p className="postServings" id='postServings'> Serves: {post.servings}</p>
                {/* <p className="postIngredients">{post.extendedIngredients}</p> */}
                <div dangerouslySetInnerHTML={{ __html: (post.instructions) }} className="postInstructions" />
                <div className="healthDiv">
                    <p className="postVegan">Vegan:{replaceString(post.vegan.toString())}</p>
                    <p className="postVegetarian">Vegetarian:{replaceString(post.vegetarian.toString())}</p>
                    <p className="postHealthy">Very Healthy: {replaceString(post.veryHealthy.toString())}</p>
                    <p className="postPopular">Very Popular:{replaceString(post.veryPopular.toString())}</p>
                </div>
            </article>
        </main>
    )
}

export default PostPage;