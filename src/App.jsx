// App.jsx
import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import unsplash from './api/unsplash'

function App() {
  const [inputState, setInputState] = useState({ text: '' })
  const [imgList, setImgList] = useState({ images: [] })

  const fetchSearchPhoto = async (input) => {
    const res = await unsplash.get('/search/photos', { params: { query: input } })
    setImgList({ img: res.data.results })
    console.log('🚀 ~ fetchSearchPhoto ~ img', res.data.results)
  }

  const onSearchSubmit = (input) => {
    console.log(input)
    fetchSearchPhoto(input)
    setInputState({ text: input })
    console.log('setState', inputState)
  }

  return (
    <div className="ui container top20">
      <SearchBar handleSubmit={onSearchSubmit} />
      <ImageList images={imgList.images} />
      <div className="ui message yellow">{inputState.text}</div>
      <div className="ui message red">{imgList.img}</div>
    </div>
  )
}

export default App
