import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: '0',
    title: 'First Item',
  },
  {
    id: '1',
    title: 'Second Item',
  },
  {
    id: 22,
    title: 'Third Item',
  },
];

const FlatListTest = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    return <Text>{item.title}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        extraData={selectedId}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatListTest;
