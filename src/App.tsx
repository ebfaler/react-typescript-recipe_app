
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import PostPage from './PostPage';
import Feed from './Feed';
import Caribbean from './Caribbean';
import Veggie from './Veggie';
import Mediterranean from './Mediterranean';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppProps from './AppProps';
import { Route, Routes, useNavigate } from 'react-router-dom';


function App() {

  //setting type to a string and an inital value of empty
  const [search, setSearch] = useState<string>('');

  const [searchResults, setSearchResults] = useState<AppProps[] | undefined>();

  //setting the inital state of the home feed
  // and setting useState to an array of type AppProps 
  const [posts, setPosts] = useState<AppProps[] | undefined>();

  //USING AXIOS TO GET DATA FOR HOME PAGE
  // useEffect(
  //   () => {

  //     // Use [] as second argument in useEffect for not rendering each time
  //     axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`)
  //       .then((response) => {
  //         console.log(response.data.recipes);
  //         setPosts(response.data.recipes);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  // Fetch our data
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`)
        setPosts(response.data.recipes);
      } catch (err) {
        // Not in the 200 response range 
        console.log(err)
      }
    }
    fetchPosts();
  }, [])


  //Set up search functionality
  useEffect(() => {
    if (!posts) {
      return
    }
    const filteredResults = posts.filter((post) =>
      // ((post.instructions).toLowerCase()).includes(search.toLowerCase())||
      ((post.title).toLowerCase()).includes(search.toLowerCase()));

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
        {/* <Route path="/caribbean" element={<Caribbean postsCategory1={postsCategory1} />} /> */}
        {/* <Route path="/mediterranean" element={<Mediterranean />} />
        <Route path="/Veggie" element={<Veggie />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
