// import library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//create Component
const App = () => (
  <View>
    <Header headerText={'Qluster'} />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('BelajarReactNative', () => App);
