import React, { useState } from "react"

// accept addSong from parent
const NewSongForm = ({ addSong }) => {
  // form state set to an empty string, title = value, setTitle = function to change that value
  const [title, setTitle] = useState("")

  // takes user input and adds it to state object in SongList
  // take in event object
  const handleSubmit = (e) => {
    // prevent default action of form
    e.preventDefault()
    // console.log(title)
    // invoke addSong with title data from user passed in
    addSong(title)
    setTitle("")
  }

  return (
    // form event listener
    <form onSubmit={handleSubmit}>
      <label>Song Name: </label>
      {/* form for user */}
      <input
        type="text"
        // value is set to what is in state
        value={title}
        required
        // handle change for user typing
        // take in the event object
        onChange={(e) => {
          // update the state using setTitle to value of the input field
          setTitle(e.target.value)
          // console.log(title)
        }}
      />
      {/* submit button */}
      <input type="submit" value="add song" />
    </form>
  )
}

export default NewSongForm
