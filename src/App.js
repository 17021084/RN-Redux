import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

import {Header} from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <Header headerText={'App Stack'} />
      <LibraryList />
    </Provider>
  );
};
// <LibraryList />

const styles = StyleSheet.create({});

export default App;
