import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://192.168.30.42:8000/graphql',
  credentials: "include",
  cache: new InMemoryCache(),
})

import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()
//Activity Imports
import HomeActivity from './pages/Home'

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
                iconName = focused ? 'ios-home' : 'ios-home-outline'
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-settings' : 'ios-settings-outline'
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
            tabBarBackgroundColor: '#9381ff',
            tabBarStyle: { backgroundColor: '#9381ff' },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeActivity} />
          <Tab.Screen name="Settings" component={HomeActivity} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}
