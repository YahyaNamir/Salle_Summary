import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import EventItem from '../components/EventItem';

const EventsScreen = () => {

  const events = [
    {
      id: '1',
      iconName: 'insert-drive-file', 
      iconColor: '#FFD700',
      event: 'Carton jaune',
      player: 'Anas EL AYAN',
      position: 'AT',
      time: '02:56',
    },
    {
      id: '2',
      iconName: 'sports-soccer',
      iconColor: '#000000',
      event: 'But marqué',
      player: 'Soufiane EL MASRAR',
      position: 'AT',
      time: '05:06',
    },
    {
      id: '3',
      iconName: 'sports-soccer',
      iconColor: '#ff0000',
      event: 'But encaisser',
      player: 'ADVERSAIRE',
      // position: '--',
      time: '11:06',
    },
    {
      id: '4',
      iconName: 'insert-drive-file', 
      iconColor: '#FFD700',
      event: 'Carton jaune',
      player: 'Anas EL AYAN',
      position: 'AT',
      time: '12:56',
    },
    {
      id: '5',
      iconName: 'insert-drive-file', 
      iconColor: '#FF0000',
      event: 'Carton rouge',
      player: 'Anas EL AYAN',
      position: 'AT',
      time: '12:56',
    },
    {
      id: '6',
      iconName: 'sports-soccer',
      iconColor: '#000000',
      event: 'But marqué',
      player: 'Soufiane CHAARAOUI',
      position: 'AT',
      time: '13:45',
    },
    {
      id: '7',
      iconName: 'sports-soccer',
      iconColor: '#000000',
      event: 'But marqué',
      player: 'Soufiane CHAARAOUI',
      position: 'AT',
      time: '17:45',
    },
    {
      id: '8',
      iconName: 'sports-soccer',
      iconColor: '#000000',
      event: 'yellw card',
      player: 'Soufiane CHAARAOUI',
      position: 'AT',
      time: '17:45',
    },
  ];

  const renderItem = ({ item, index }) => {
    const backgroundColor = index % 2 === 0 ? '#fff' : '#f0f0f0';
    return (
      <EventItem
        iconName={item.iconName}
        iconColor={item.iconColor}
        event={item.event}
        player={item.player}
        position={item.position}
        time={item.time}
        backgroundColor={backgroundColor}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
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
});

export default EventsScreen;
