import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ChemistryItem from '../components/ChemistryItem';

const chemistryData = [
  {
    id: '1',
    picture: require('../assets/images/chaaraoui.png'),
    name: 'Soufiane CHAARAOUI',
    goal: 10,
    minutePlayer: '50:00',
    yellowCard: 2,
    redCard: 0,
    receivedGoal: 5,
    foulCommitted: 4,
  },
  {
    id: '2',
    picture: require('../assets/images/ayan.png'),
    name: 'Anas EL AYAN',
    goal: 2,
    minutePlayer: '50:00',
    yellowCard: 1,
    redCard: 0,
    receivedGoal: 5,
    foulCommitted: 1,
  },
  {
    id: '3',
    picture: require('../assets/images/mesrar.png'),
    name: 'Soufiane EL MESRAR',
    goal: 8,
    minutePlayer: '50:00',
    yellowCard: 3,
    redCard: 1,
    receivedGoal: 5,
    foulCommitted: 2,
  },
  {
    id: '4',
    picture: require('../assets/images/aniba1.png'),
    name: 'Abdelkrim ANBIA',
    goal: 12,
    minutePlayer: '50:00',
    yellowCard: 1,
    redCard: 3,
    receivedGoal: 5,
    foulCommitted: 16,
  },
  {
    id: '5',
    picture: require('../assets/images/chaaraoui.png'),
    name: 'Player 1',
    goal: 7,
    minutePlayer: '50:00',
    yellowCard: 2,
    redCard: 0,
    receivedGoal: 5,
    foulCommitted: 2,
  },
  {
    id: '6',
    picture: require('../assets/images/ayan.png'),
    name: 'Player 2',
    goal: 1,
    minutePlayer: '80:00',
    yellowCard: 0,
    redCard: 0,
    receivedGoal: 10,
    foulCommitted: 4,
  },
  {
    id: '7',
    picture: require('../assets/images/mesrar.png'),
    name: 'Player 3',
    goal: 3,
    minutePlayer: '80:00',
    yellowCard: 100,
    redCard: 0,
    receivedGoal: 10,
    foulCommitted: 7,
  },
  {
    id: '8',
    picture: require('../assets/images/aniba1.png'),
    name: 'Player 4',
    goal: 5,
    minutePlayer: '80:00',
    yellowCard: 2,
    redCard: 1,
    receivedGoal: 10,
    foulCommitted: 2,
  },
  {
    id: '9',
    picture: require('../assets/images/chaaraoui.png'),
    name: 'Player 5',
    goal: 6,
    minutePlayer: '80:00',
    yellowCard: 1,
    redCard: 0,
    receivedGoal: 10,
    foulCommitted: 1,
  },
  {
    id: '10',
    picture: require('../assets/images/ayan.png'),
    name: 'Player 6',
    goal: 2,
    minutePlayer: '80:00',
    yellowCard: 0,
    redCard: 0,
    receivedGoal: 10,
    foulCommitted: 3,
  },
  {
    id: '11',
    picture: require('../assets/images/chaaraoui.png'),
    name: 'Player 1',
    goal: 7,
    minutePlayer: '50:00',
    yellowCard: 2,
    redCard: 0,
    receivedGoal: 5,
    foulCommitted: 2,
  },
  {
    id: '12',
    picture: require('../assets/images/ayan.png'),
    name: 'Player 2',
    goal: 1,
    minutePlayer: '80:00',
    yellowCard: 0,
    redCard: 0,
    receivedGoal: 10,
    foulCommitted: 4,
  },
  {
    id: '12',
    picture: require('../assets/images/mesrar.png'),
    name: 'Player 3',
    goal: 3,
    minutePlayer: '80:00',
    yellowCard: 100,
    redCard: 0,
    receivedGoal: 10,
    foulCommitted: 7,
  },
  {
    id: '13',
    picture: require('../assets/images/aniba1.png'),
    name: 'Player 4',
    goal: 5,
    minutePlayer: '80:00',
    yellowCard: 2,
    redCard: 1,
    receivedGoal: 10,
    foulCommitted: 2,
  },
  {
    id: '14',
    picture: require('../assets/images/chaaraoui.png'),
    name: 'Player 5',
    goal: 6,
    minutePlayer: '80:00',
    yellowCard: 1,
    redCard: 0,
    receivedGoal: 10,
    foulCommitted: 1,
  },
  {
    id: '15',
    picture: require('../assets/images/ayan.png'),
    name: 'Player 6',
    goal: 2,
    minutePlayer: '80:00',
    yellowCard: 0,
    redCard: 0,
    receivedGoal: 10,
    foulCommitted: 3,
  },
];

const calculateTotals = data => {
  return data.reduce(
    (totals, player) => {
      totals.goals += player.goal;
      totals.minutes = player.minutePlayer;
      totals.yellowCards += player.yellowCard;
      totals.redCards += player.redCard;
      totals.receivedGoals += player.receivedGoal;
      totals.foulCommitted += player.foulCommitted;
      return totals;
    },
    {
      goals: 0,
      minutes: 0,
      yellowCards: 0,
      redCards: 0,
      receivedGoals: 0,
      foulCommitted: 0,
    },
  );
};

const AccordionItem = ({ children, title }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleItem = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.accordContainer}>
      <TouchableOpacity style={styles.accordHeader} onPress={toggleItem}>
        <Text style={styles.accordTitle}>{title}</Text>
        <Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={20} color="#ffffff" />
      </TouchableOpacity>
      {expanded && children}
    </View>
  );
};

export default function ChemistryScreen() {
  const group1 = chemistryData.slice(0, 5);
  const group2 = chemistryData.slice(5, 10);
  const group3 = chemistryData.slice(10, 15);
  const totals1 = calculateTotals(group1);
  const totals2 = calculateTotals(group2);
  const totals3 = calculateTotals(group3);

  const renderItem = ({ item, index }) => {
    const backgroundColor = index % 2 === 0 ? '#fff' : '#f0f0f0';

    return (
      <View style={{ backgroundColor }}>
        <ChemistryItem chemistry={item} />
      </View>
    );
  };

  const renderTotals = totals => (
    <View style={styles.totalsContainer}>
      <Text style={styles.totalName}>TOTAL :</Text>
      <Text style={styles.totalsText}>{totals.minutes}</Text>
      <Text style={styles.totalsText}>{totals.goals}</Text>
      <Text style={styles.totalsText}>{totals.receivedGoals}</Text>
      <Text style={styles.totalsText}>{totals.yellowCards}</Text>
      <Text style={styles.totalsText}>{totals.redCards}</Text>
      <Text style={styles.totalsText}>{totals.foulCommitted}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <AccordionItem title="Team 1" >
          <View style={styles.teamContainer}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Player</Text>
              <View style={styles.iconView}>
                <Icon name="clock-o" size={18} color="#fff" style={styles.icon} />
                <Icon name="soccer-ball-o" size={18} color="#fff" style={styles.icon} />
                <Icon name="shield" size={18} color="#fff" style={styles.icon} />
                <Icon name="square" size={18} color="yellow" style={styles.icon} />
                <Icon name="square" size={18} color="red" style={styles.icon} />
                <Icon name="exclamation-triangle" size={18} color="#FF0000" style={styles.icon} />
              </View>
            </View>
            <FlatList
              data={group1}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              ListFooterComponent={() => renderTotals(totals1)}
            />
          </View>
        </AccordionItem>
        <AccordionItem title="Team 2">
          <View style={styles.teamContainer}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Player</Text>
              <View style={styles.iconView}>
                <Icon name="clock-o" size={18} color="#fff" style={styles.icon} />
                <Icon name="soccer-ball-o" size={18} color="#fff" style={styles.icon} />
                <Icon name="shield" size={18} color="#fff" style={styles.icon} />
                <Icon name="square" size={18} color="yellow" style={styles.icon} />
                <Icon name="square" size={18} color="red" style={styles.icon} />
                <Icon name="exclamation-triangle" size={18} color="#FF0000" style={styles.icon} />
              </View>
            </View>
            <FlatList
              data={group2}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              ListFooterComponent={() => renderTotals(totals2)}
            />
          </View>
        </AccordionItem>
        <AccordionItem title="Team 3">
          <View style={styles.teamContainer}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Player</Text>
              <View style={styles.iconView}>
                <Icon name="clock-o" size={18} color="#fff" style={styles.icon} />
                <Icon name="soccer-ball-o" size={18} color="#fff" style={styles.icon} />
                <Icon name="shield" size={18} color="#fff" style={styles.icon} />
                <Icon name="square" size={18} color="yellow" style={styles.icon} />
                <Icon name="square" size={18} color="red" style={styles.icon} />
                <Icon name="exclamation-triangle" size={18} color="#FF0000" style={styles.icon} />
              </View>
            </View>
            <FlatList
              data={group3}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              ListFooterComponent={() => renderTotals(totals3)}
            />
          </View>
        </AccordionItem>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // teamContainer: {
  //   // borderWidth: 5,
  // },
  teamHeader: {
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
    padding: 15,
    backgroundColor: '#075b5b',
    color: '#fff',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#0c8e8e',
  },
  headerText: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    marginRight: 17,
    width: 99,
  },
  icon: {
    marginRight: 25.5,
  },
  iconView: {
    marginLeft: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f0f0f0',
  },
  totalsText: {
    fontFamily: 'Poppins-Bold',
    width: 40,
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
  },
  totalName: {
    fontFamily: 'Poppins-Bold',
    width: 155,
    fontSize: 14,
    textAlign: 'left',
    color: '#272626',
  },
  accordContainer: {
    marginBottom: 4,
  },
  accordHeader: {
    padding: 12,
    backgroundColor: '#0c8e8e',
    color: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accordTitle: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'Poppins-Bold'
  },

});
