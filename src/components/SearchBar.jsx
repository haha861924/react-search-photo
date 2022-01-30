const SearchBar = (props) => {
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
