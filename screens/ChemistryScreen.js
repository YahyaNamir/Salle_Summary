import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import ChemistryItem from '../components/ChemistryItem'; 
const chemistryData = [
  {
    id: '1',
    picture: require('../assets/images/chaaraoui.png'),
    name: 'Soufiane CHAARAOUI',
    goal: 5,
    minutePlayer: '90:00',
    yellowCard: 2,
    redCard: 0,
    receivedGoal: 3,
  },
  {
    id: '2',
    picture: require('../assets/images/ayan.png'),
    name: 'Anas EL AYAN',
    goal: 2,
    minutePlayer: '85:00',
    yellowCard: 1,
    redCard: 0,
    receivedGoal: 2,
  },
  {
    id: '3',
    picture: require('../assets/images/mesrar.png'),
    name: 'Soufiane EL MESRAR',
    goal: 8,
    minutePlayer: '95:00',
    yellowCard: 3,
    redCard: 1,
    receivedGoal: 5,
  },
  {
    id: '4',
    picture: require('../assets/images/aniba1.png'),
    name: 'Abdelkrim ANBIA',
    goal: 4,
    minutePlayer: '80:00',
    yellowCard: 1,
    redCard: 0,
    receivedGoal: 4,
  },
  {
    id: '5',
    picture: require('../assets/images/chaaraoui.png'),
    name: 'Soufiane CHAARAOUI',
    goal: 7,
    minutePlayer: '100:00',
    yellowCard: 2,
    redCard: 0,
    receivedGoal: 6,
  },
  {
    id: '6',
    picture: require('../assets/images/ayan.png'),
    name: 'Anas EL AYAN',
    goal: 1,
    minutePlayer: '70:00',
    yellowCard: 0,
    redCard: 0,
    receivedGoal: 1,
  },
  {
    id: '7',
    picture: require('../assets/images/mesrar.png'),
    name: 'Soufiane EL MESRAR',
    goal: 3,
    minutePlayer: '90:00',
    yellowCard: 1,
    redCard: 0,
    receivedGoal: 2,
  },
  {
    id: '8',
    picture: require('../assets/images/aniba1.png'),
    name: 'Abdelkrim ANBIA',
    goal: 5,
    minutePlayer: '110:00',
    yellowCard: 2,
    redCard: 1,
    receivedGoal: 7,
  },
  {
    id: '9',
    picture: require('../assets/images/chaaraoui.png'),
    name: 'Soufiane CHAARAOUI',
    goal: 6,
    minutePlayer: '95:00',
    yellowCard: 1,
    redCard: 0,
    receivedGoal: 3,
  },
  {
    id: '10',
    picture: require('../assets/images/ayan.png'),
    name: 'Anas EL AYAN',
    goal: 2,
    minutePlayer: '85:00',
    yellowCard: 0,
    redCard: 0,
    receivedGoal: 2,
  },
];

export default function ChemistryScreen() {
  const renderItem = ({ item, index }) => {
    const backgroundColor = index % 2 === 0 ? '#fff' : '#f0f0f0';

    return (
      <View style={{ backgroundColor }}>
        <ChemistryItem chemistry={item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chemistryData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
