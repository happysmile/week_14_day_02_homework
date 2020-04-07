import React from "react";

const Song = ({title, releaseDate, artist, category, imageUrl, audioUrl}) => {
  return(
    <li className="song">
      <h4>{title}</h4>
      <p>Artist: {artist}</p>
      <img src={imageUrl} alt={artist +" - "+ title} />
      <p>Release date: {releaseDate}</p>
      <p>Category: {category}</p>
      <audio src={audioUrl} controls type="audio/ogg"></audio>
    </li>
  )
}

export default Song;

// <p><a href={audioUrl}>Audio Preview</a></p>
//<audio src={} controls type="audio/ogg"></audio>
