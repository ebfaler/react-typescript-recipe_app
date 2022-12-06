
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import PostPage from './PostPage';
import Feed from './Feed';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppProps from './AppProps';
import { Route, Routes, useNavigate } from 'react-router-dom';


function App() {

  //setting the search string to an inital value of empty
  const [search, setSearch] = useState<string>('');
  //setting the home feed based on user search
  const [searchResults, setSearchResults] = useState<AppProps[] | undefined>();


  //setting the inital state of the home feed
  // and setting useState to an array of type AppProps 
  const [posts, setPosts] = useState<AppProps[] | undefined>();


  // Fetch our data to display all the posts at load time ([] sets useEffect at load time)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        //by default axios converts js to json
        const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=24`)
        setPosts(response.data.recipes);
      } catch (err) {
        // Not in the 200 response range 
        console.log(err)
      }
    }
    fetchPosts();
  }, [])


  //Set up search functionality, when posts or search dependancies change
  useEffect(() => {
    if (!posts) {
      return
    }
    const filteredResults = posts.filter((post) =>
      //filter out any of the (lower case) post title includes any of the search terms. I set search state in Search.tsx
      ((post.title).toLowerCase()).includes(search.toLowerCase()));
    //with the titles that do match, we will set them in the search results
    setSearchResults(filteredResults);
  }, [posts, search])

  return (
    <div className="App">
      <Header />
      <Search
        search={search}
        setSearch={setSearch}
      />

      <Routes>
        <Route path="/" element={<Feed posts={searchResults} />} />
        <Route path="/post/:id" element={<PostPage posts={posts} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
