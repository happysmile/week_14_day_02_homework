import React, {Component} from "react";
import Song from "./Song";

class MusicChart extends Component {

  render(){
    const songNodes = this.props.songs.map(song => {
      return(
        <Song releaseDate={song["im:releaseDate"].label} title={song["im:name"].label} artist={song["im:artist"].label} category={song.category.attributes.label} imageUrl={song["im:image"][2].label} audioUrl={song.link[1].attributes.href} key={song.id.attributes["im:id"]}></Song>
      );
    });
    return(
      <ol className="songs-list">
      {songNodes}
      </ol>
    );
  }

}

export default MusicChart;
