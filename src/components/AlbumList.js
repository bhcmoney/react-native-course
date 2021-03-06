import React, { Component } from 'react';
import { ScrollView } from 'react-native'

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(data => this.setState({ albums: data }));
    // debugger;
    // control + M will open menu to open Remote Debugger for android
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView style={{ flex: 1, paddingBottom: 20, height: '100%'}}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
