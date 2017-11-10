import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList'

const App = () => (
    <View>
        <Header text={'Albums'} />
        <AlbumList />
    </View>
);

AppRegistry.registerComponent('albums', () => App);

// const App = () => (
//     <Text>Some Text</Text>
// );

// This is the same as above

// const App = () => {
//   return (
//       <Text>Some Text</Text>
//   );
// }
