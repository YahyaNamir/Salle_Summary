import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';

const CustomHeader = () => {
  const { t } = useTranslation();

  return (
    <>
      <View style={styles.headerContainerS}>
        <View style={styles.leftIcon}>
          <Icon name="arrow-back" size={30} color="#ffffff" />
        </View>
        <View style={styles.centerContent}>
          <Icon name="assignment" size={30} color="#ffffff" />
          <Text style={styles.headerTitleS}>{t('SUMMARY')}</Text>
        </View>
        <View style={styles.rightIcon}>
          <Icon name="delete" size={30} color="#ffffff" />
        </View>
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Icon name="date-range" size={25} color="#d7bf06" style={styles.icon} />
          <View>
            <Text style={styles.headerTitle}>{t('OPPONENT')}</Text>
            <Text style={styles.headerSubtitle}>16.02.2024 - 17:35:21</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainerS: {
    backgroundColor: '#0c8e8e',
    height: 65,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#383636',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  headerContainer: {
    height: 70,
    backgroundColor: '#f5f8f7',
    padding: 10,
    alignItems: 'flex-start',
    shadowColor: '#1c1a1a',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  headerContent: {
    marginTop: 15,
    height: 40,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    flex: 1,
    // alignItems: 'flex-start',
  },
  centerContent: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  icon: {
    marginLeft: 25,
    marginBottom: 12,
  },
  headerTitle: {
    fontFamily: 'Regular-Bold',
    fontSize: 18,
    color: '#000000',
    marginLeft: 10,
  },
  headerTitleS: {
    fontFamily: 'Regular-SemiBold',
    fontSize: 20,
    color: '#ffffff',
    marginLeft: 10,
  },
  headerSubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#000000',
    marginLeft: 10,
  },
});

export default CustomHeader;
