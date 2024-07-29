import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PlayerSub from '../components/PlayerSub';

const SubsScreen = () => {
  const substitutions = [
    { 
      id: '1', 
      time: '22:18',
      playerIn: { name: 'Abdelkrim ANBIA', position: 'GK', photo: require('../assets/images/aniba1.png') },
      playerOut: { name: 'Soufiane EL MESRAR', position: 'MO', photo: require('../assets/images/mesrar.png') },
    },
    { 
      id: '2', 
      time: '05:18',
      playerIn: { name: 'Anas EL AYAN', position: 'AT', photo: require('../assets/images/ayan.png') },
      playerOut: { name: 'Soufian CHAARAOUI', position: 'AT', photo: require('../assets/images/chaaraoui.png') },
    },
    { 
      id: '3', 
      time: '04:10',
      playerIn: { name: 'Abdelkrim ANBIA', position: 'GK', photo: require('../assets/images/aniba1.png') },
      playerOut: { name: 'Soufian CHAARAOUI', position: 'AT', photo: require('../assets/images/chaaraoui.png') },
    },
    { 
      id: '4', 
      time: '21:12',
      playerIn: { name: 'Anas EL AYAN', position: 'AT', photo: require('../assets/images/ayan.png') },
      playerOut: { name: 'Soufiane EL MESRAR', position: 'MO', photo: require('../assets/images/mesrar.png') },
    },
    { 
      id: '5', 
      time: '12:08',
      playerIn: { name: 'Abdelkrim ANBIA', position: 'GK', photo: require('../assets/images/aniba1.png') },
      playerOut: { name: 'Soufian CHAARAOUI', position: 'AT', photo: require('../assets/images/chaaraoui.png') },
    },
    { 
      id: '6', 
      time: '03:28',
      playerIn: { name: 'Anas EL AYAN', position: 'AT', photo: require('../assets/images/ayan.png') },
      playerOut: { name: 'Soufiane EL MESRAR', position: 'MO', photo: require('../assets/images/mesrar.png') },
    },
  ];

  const renderItem = ({ item }) => {
    const backgroundColor = item.id % 2 === 0 ? '#fff' : '#f0f0f0';

    return (
      <View style={[styles.itemContainer, { backgroundColor }]}>
        <PlayerSub substitution={item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={substitutions}
        renderItem={renderItem}
        // keyExtractor={item => item.id}
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