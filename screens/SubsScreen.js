import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PlayerSub from '../components/PlayerSub';
import { players } from './TimeScreen';


const SubsScreen = () => {
  

  const renderItem = ({ item, index }) => {
    const backgroundColor = index % 2 === 0 ? '#fff' : '#f0f0f0'; 

    return (
      <View style={[styles.itemContainer, { backgroundColor }]}>
        <PlayerSub player={item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default SubsScreen;
