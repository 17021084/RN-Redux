import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        // key must be string
        keyExtractor={(library) => library.id.toString()}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {libraries: state.libraries};
};

// seem like weird syntax. but this connect component LibraryList to Reducer
export default connect(mapStateToProps)(LibraryList);
// connect() return a function .
