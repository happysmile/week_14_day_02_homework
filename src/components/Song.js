import React from "react";

const Song = ({title, releaseDate, artist, category, imageUrl, audioUrl}) => {
  return(
    <li className="song">
      <h4>{title}</h4>
      <p>Artist: {artist}</p>
      <img src={imageUrl} alt={artist +" - "+ title} />
      <p>Release date: {releaseDate}</p>
      <p>Category: {category}</p>
      <p><a href={audioUrl}>Audio Preview</a></p>
    </li>
  )
}

export default Song;
