import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from './common';
import * as actions from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component {
  renderDescriptions() {
    const {library, expand} = this.props;
    if (expand) {
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
const mapStateToProps = (state, ownProps) => {
  //ownprops = this.props trong cái class kia
  const expand = state.selectLibraryId === ownProps.library.item.id;
  // trả về obj là 1 thuộc tính của props
  // return {expand: expand};
  return {expand};
  // return {
  //   // tên props dùng  _______gioống tên key ở chỗ combineReducer
  //   selectLibraryId: state.selectLibraryId,
  // };
};
// map state and connect actions
export default connect(mapStateToProps, actions)(ListItem);
