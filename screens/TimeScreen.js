import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PlayerItem from '../components/PlayerItem';

const players = [
  { id: '1', name: 'Abdelkrim ANBIA', position: 'GK', photo: require('../assets/images/aniba1.png'), timeIn: '22:18', timeOut: '12:18' },
  { id: '10', name: 'Soufiane EL MESRAR', position: 'MO', photo: require('../assets/images/mesrar.png'), timeIn: '22:18', timeOut: '12:18' },
  { id: '3', name: 'Anas EL AYAN', position: 'AT', photo: require('../assets/images/ayan.png'), timeIn: '22:18', timeOut: '12:18' },
  { id: '8', name: 'Soufian CHAARAOUI', position: 'AT', photo: require('../assets/images/chaaraoui.png'), timeIn: '22:18', timeOut: '12:18' },
  //__________________________________________________________________________________
  // { id: '1', name: 'Abdelkrim ANBIA', position: 'GK', photo: require('../assets/images/aniba1.png'), timeIn: '22:18', timeOut: '12:18' },
  // { id: '10', name: 'Soufiane EL MESRAR', position: 'MO', photo: require('../assets/images/mesrar.png'), timeIn: '22:18', timeOut: '12:18' },
  // { id: '3', name: 'Anas EL AYAN', position: 'AT', photo: require('../assets/images/ayan.png'), timeIn: '22:18', timeOut: '12:18' },
  // { id: '8', name: 'Soufian CHAARAOUI', position: 'AT', photo: require('../assets/images/chaaraoui.png'), timeIn: '22:18', timeOut: '12:18' },
];

const TimeScreen = () => {
  
  const doubledPlayers = [...players, ...players];

  const renderItem = ({ item, index }) => {
    const backgroundColor = index % 2 === 0 ? '#fff' : '#f0f0f0'; 

    return (
      <View style={[styles.itemContainer, { backgroundColor }]}>
        <PlayerItem player={item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={doubledPlayers}
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

export default TimeScreen;
