import React, { useState } from "react"
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

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }])
  }

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  )
}

export default SongList
