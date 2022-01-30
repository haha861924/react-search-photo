import React, { useState } from 'react'

const SearchBar = (props) => {
  const { handleSubmit } = props
  const [state, setState] = useState({ inputText: '' })

  const handleInput = ({ target }) => {
    setState({ inputText: target.value })
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleSubmit(state.inputText)
  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleFormSubmit}>
        <div className="field">
          <label htmlFor="search">Search</label>
          <input id="search" type="text" onChange={handleInput} value={state.inputText} />
        </div>
        <button className="ui button"> submit </button>
      </form>
    </div>
  )
}

export default SearchBar
