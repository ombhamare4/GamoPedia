import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://192.168.30.42:8000/graphql',
  credentials: 'include',
  cache: new InMemoryCache(),
})

import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()

//Icons
import HomeIcon from './assets/icons/41-home-outline.gif'
import SettingIcon from './assets/icons/63-settings-cog-outline.gif'
import AccountIcon from './assets/icons/8-account-outline.gif'

//Activity Imports
import HomeActivity from './pages/Home'
import AccountAcitivty from './pages/Account'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#9381ff"
          translucent={true}
        />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName

              if (route.name === 'Home') {
                iconName = HomeIcon
              } else if (route.name === 'Settings') {
                // iconName = focused ? 'ios-settings' : 'ios-settings-outline'
                iconName = SettingIcon
              } else if (route.name === 'Account') {
                // iconName = focused ? 'ios-account' : 'ios-account-circle'
                iconName = AccountIcon
              }

              // You can return any component that you like here!
              // return <Ionicons name={iconName} size={size} color={color} />
              return <Image style={styles.icon} source={iconName} />
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
            tabBarBackgroundColor: '#9381ff',
            tabBarStyle: {
              backgroundColor: '#9381ff',
              height: '8%',
              paddingBottom: 10,
            },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeActivity} />
          <Tab.Screen name="Settings" component={HomeActivity} />
          <Tab.Screen name="Account" component={AccountAcitivty} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
})
