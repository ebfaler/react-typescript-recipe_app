
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

  //setting type to a string and an inital value of empty
  const [search, setSearch] = useState<string>('');

  //setting the inital state of the feed
  //setting useState to an array of type AppProps 
  const [posts, setPosts] = useState<AppProps[] | undefined>();

  //if we wanted to accept multiple types of string we could use union eg 
  // const [searchNew, setSearchNew] = useState<string | number >('');

  //USING AXIOS TO GET DATA
  useEffect(
    () => {

      // Use [] as second argument in useEffect for not rendering each time
      axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`)
        .then((response) => {
          console.log(response.data.recipes);
          setPosts(response.data.recipes);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);


  return (
    <div className="App">
      <Header />
      <Search
        search={search}
        setSearch={setSearch}
      />

      <Routes>
        <Route path="/" element={<Feed posts={posts} />} />
        <Route path="/post/:id" element={<PostPage posts={posts} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
