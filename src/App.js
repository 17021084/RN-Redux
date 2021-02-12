import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header} from './components/common';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import LibraryList from './components/LibraryList';
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <Header headerText={'app Stack'} />
      <LibraryList />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
