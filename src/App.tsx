
import './index.css';
import Header from './Header';
import Search from './Search';
import Feed from './Feed';
import { useEffect, useState } from 'react';
import React from 'react';
// import api from './api/posts';
import axios from 'axios';


function App() {


  //setting type to a string and an inital value of empty
  const [search, setSearch] = useState<string>('');

  //setting the inital state of the feed
  const [feed, setFeed] = useState<string>('');

  //if we wanted to accept multiple types of string we could use union eg 
  // const [searchNew, setSearchNew] = useState<string | number >('');

  //AXIOS



  //USING FETCH API with my own local REST API found in data/recipes.json
  // const API_URL = 'http://localhost:3500/items';

  // useEffect(() => {

  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch(API_URL);
  //       const listItems = await response.json;
  //       console.log(listItems)
  //       setFeed(listItems);
  //     }
  //     catch (err) {
  //       console.log('error');

  //     }
  //   }
  //   setTimeout(() => fetchItems(), 2000);

  // }, []);


  // USING AXIOS TO GET DATA

  //axios request, intitialised on page load
  // useEffect(() => {
  //   const url = 'www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
  //   axios.get(url).then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);




  return (
    <div className="App">
      <Header />
      <Search
        search={search}
        setSearch={setSearch}
      />
      <Feed
        feed={feed}
        setFeed={setFeed} />
    </div>
  );
}

export default App;
