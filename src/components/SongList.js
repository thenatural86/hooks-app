import React, { useState, useEffect } from "react"
import uuid from "uuid/dist/v1"
import NewSongForm from "./NewSongForm"

const SongList = () => {
  // defining properties of state object in the useState() function
  // song = data, setSongs = function to change the data
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 },
  ])

  const [age, setAge] = useState(20)

  // like a lifecycle method
  // takes callback function that is run every time the component re/renders as a parameter
  useEffect(() => {
    console.log("use effect hook ran", songs)
  }, [songs])
  useEffect(() => {
    console.log("use effect hook ran", age)
  }, [age])
  // takes in the title object
  const addSong = (title) => {
    // add this object into the songs piece of state
    setSongs([...songs, { title, id: uuid() }])
  }

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>
        })}
      </ul>
      {/* pass addSong function down on props */}
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add to Age: </button>
      {age}
    </div>
  )
}

export default SongList
