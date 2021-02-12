import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log('renderr');
    console.log(this.props);
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {libraries: state.libraries};
};

// seem like weird syntax. but this connect component LibraryList to Reducer
export default connect(mapStateToProps)(LibraryList);
// connect() return a function .
