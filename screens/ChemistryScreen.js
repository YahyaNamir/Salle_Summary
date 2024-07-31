import { View, FlatList, StyleSheet, Text, ScrollView } from 'react-native';
import React from 'react';
import ChemistryItem from '../components/ChemistryItem';
import Icon from 'react-native-vector-icons/FontAwesome';

const chemistryData = [
  // { id: '1', picture: require('../assets/images/chaaraoui.png'), name: 'Soufiane CHAARAOUI', goal: 5, minutePlayer: '90:00', yellowCard: 2, redCard: 0, receivedGoal: 3 },
  { id: '2', picture: require('../assets/images/ayan.png'), name: 'Anas EL AYAN', goal: 2, minutePlayer: '85:00', yellowCard: 1, redCard: 0, receivedGoal: 2 },
  { id: '3', picture: require('../assets/images/mesrar.png'), name: 'Soufiane EL MESRAR', goal: 8, minutePlayer: '95:00', yellowCard: 3, redCard: 1, receivedGoal: 5 },
  { id: '4', picture: require('../assets/images/aniba1.png'), name: 'Abdelkrim ANBIA', goal: 4, minutePlayer: '80:00', yellowCard: 1, redCard: 0, receivedGoal: 4 },
  { id: '5', picture: require('../assets/images/chaaraoui.png'), name: 'Soufiane CHAARAOUI', goal: 7, minutePlayer: '100:00', yellowCard: 2, redCard: 0, receivedGoal: 6 },
  { id: '6', picture: require('../assets/images/ayan.png'), name: 'Anas EL AYAN', goal: 1, minutePlayer: '70:00', yellowCard: 0, redCard: 0, receivedGoal: 1 },
  { id: '7', picture: require('../assets/images/mesrar.png'), name: 'Soufiane EL MESRAR', goal: 3, minutePlayer: '90:00', yellowCard: 1, redCard: 0, receivedGoal: 2 },
  { id: '8', picture: require('../assets/images/aniba1.png'), name: 'Abdelkrim ANBIA', goal: 5, minutePlayer: '110:00', yellowCard: 2, redCard: 1, receivedGoal: 7 },
  { id: '9', picture: require('../assets/images/chaaraoui.png'), name: 'Soufiane CHAARAOUI', goal: 6, minutePlayer: '95:00', yellowCard: 1, redCard: 0, receivedGoal: 3 },
  { id: '10', picture: require('../assets/images/ayan.png'), name: 'Anas EL AYAN', goal: 2, minutePlayer: '85:00', yellowCard: 0, redCard: 0, receivedGoal: 2 },
];

const calculateTotals = (data) => {
  return data.reduce((totals, player) => {
    totals.goals += player.goal;
    totals.minutes += parseInt(player.minutePlayer);
    totals.yellowCards += player.yellowCard;
    totals.redCards += player.redCard;
    totals.receivedGoals += player.receivedGoal;
    return totals;
  }, { goals: 0, minutes: 0, yellowCards: 0, redCards: 0, receivedGoals: 0 });
};

export default function ChemistryScreen() {
  const group1 = chemistryData.slice(0, 5);
  const group2 = chemistryData.slice(5, 10);
  const totals1 = calculateTotals(group1);
  const totals2 = calculateTotals(group2);

  const renderItem = ({ item, index }) => {
    const backgroundColor = index % 2 === 0 ? '#fff' : '#f0f0f0';

    return (
      <View style={{ backgroundColor }}>
        <ChemistryItem chemistry={item} />
      </View>
    );
  };

  const renderTotals = (totals) => (
    <View style={styles.totalsContainer}>
      <Text style={styles.TOTAL}>TOTAL :</Text>
      <Text style={styles.totalsText}>{totals.minutes}</Text>
      <Text style={styles.totalsText}>{totals.goals}</Text>
      <Text style={styles.totalsText}>{totals.receivedGoals}</Text>
      <Text style={styles.totalsText}>{totals.yellowCards}</Text>
      <Text style={styles.totalsText}>{totals.redCards}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamHeader}>Team 1</Text>
          <View style={styles.header}>
            <Text style={styles.headerText}>Player</Text>
            <Icon name="clock-o" size={20} color="#fff" style={styles.icon} />
            <Icon name="soccer-ball-o" size={20} color="#fff" style={styles.icon} />
            <Icon name="shield" size={20} color="#fff" style={styles.icon} />
            <Icon name="square" size={20} color="yellow" style={styles.icon} />
            <Icon name="square" size={20} color="red" style={styles.icon} />
          </View>
          <FlatList
            data={group1}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListFooterComponent={() => renderTotals(totals1)}
          />
        </View>
        <View style={styles.teamContainer}>
          <Text style={styles.teamHeader}>Team 2</Text>
          <View style={styles.header}>
            <Text style={styles.headerText}>Player</Text>
            <Icon name="clock-o" size={20} color="#fff" style={styles.icon} />
            <Icon name="soccer-ball-o" size={20} color="#fff" style={styles.icon} />
            <Icon name="shield" size={20} color="#fff" style={styles.icon} />
            <Icon name="square" size={20} color="yellow" style={styles.icon} />
            <Icon name="square" size={20} color="red" style={styles.icon} />
          </View>
          <FlatList
            data={group2}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListFooterComponent={() => renderTotals(totals2)}
          />
        </View>
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
  teamContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    // marginBottom: 20,
  },
  teamHeader: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    padding: 10,
    backgroundColor: '#075b5b',
    color: '#fff',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#075b5b',
  },
  headerText: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    marginRight: 10,
    width: 120, 
  },
  icon: {
    width: 50, 
    textAlign: 'center',
  },
  totalsContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  totalsText: {
    fontFamily: 'Poppins-Bold',
    width: 50, 
    textAlign: 'center',
    fontSize: 16,
  },
  TOTAL: {
    fontFamily: 'Poppins-Bold',
    width: 130, 
    // textAlign: 'center',
    fontSize: 16,
  },
});
