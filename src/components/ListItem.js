import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from './common';
import * as actions from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component {
  renderDescriptions() {
    const {library, selectLibraryId} = this.props;
    if (selectLibraryId === library.item.id) {
      return (
        <View>
          <Text> {library.item.description}</Text>
        </View>
      );
    }
  }
  render() {
    const title = this.props.library.item.title;
    const id = this.props.library.item.id;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          // dispatch action
          this.props.selectLibrary(id);
        }}>
        <View>
          <CardSection>
            <Text> {title} </Text>
          </CardSection>
          {this.renderDescriptions()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // tên props dùng  _______gioống tên key ở chỗ combineReducer
    selectLibraryId: state.selectLibraryId,
  };
};
// map state and connect actions
export default connect(mapStateToProps, actions)(ListItem);
