import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TimeScreen from './screens/TimeScreen';
import LineupScreen from './screens/LineupScreen';
import SubsScreen from './screens/SubsScreen';
import EventsScreen from './screens/EventsScreen';
import CustomHeader from './components/CustomHeader';
import CustomTabBar from './components/CustomTabBar';
import ChemistryScreen from './screens/ChemistryScreen';
import './services/i18next'; 

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
// const { t, i18n } = useTransition();

const TabNavigator = () => (
  <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
    <Tab.Screen name="TIME" component={TimeScreen} title="haha" />
    <Tab.Screen name="LINEUP" component={LineupScreen} />
    <Tab.Screen name="SUBS" component={SubsScreen} />
    <Tab.Screen name="EVENTS" component={EventsScreen} />
    <Tab.Screen name="CHEMISTRY" component={ChemistryScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Summary"
          component={TabNavigator}
          options={{ 
            header: () => <CustomHeader />, 
            headerShown: true 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
