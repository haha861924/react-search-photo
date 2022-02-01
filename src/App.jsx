// App.jsx
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import unsplash from './api/unsplash';
import './App.css'

function App() {
  const [inputState, setInputState] = useState({ text: '' });
  const [imgList, setImgList] = useState({ images: [] });

  const fetchSearchPhoto = async (input) => {
    const res = await unsplash.get('/search/photos', { params: { query: input, page: 2 } });
    setImgList({ images: res.data.results });
  };

  const onSearchSubmit = (input) => {
    console.log(input);
    fetchSearchPhoto(input);
    setInputState({ text: input });
    console.log('setState', inputState);
  };

  return (
    <div className="ui container top20">
      <SearchBar handleSubmit={onSearchSubmit} />
      <ImageList images={imgList.images} />
    </div>
  );
}

export default App;
