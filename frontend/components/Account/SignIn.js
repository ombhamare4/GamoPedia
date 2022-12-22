import { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Animated,
} from 'react-native'
import Anime from 'animejs'
const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [secureTextEntry, setSecureTextEntry] = useState(true)


  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  return (
    <View>
      <View className="bg-red-500 mt-24">
        <Text className="text-white font-bold text-center text-5xl">
          Sign In
        </Text>
        <View className="mt-10">
          <SafeAreaView>
            <TextInput
              style={styles.input}
              value={email}
              placeholder="Email"
              placeholderTextColor="#9381ff"
              onChangeText={(text) => setEmail(text)}
            />
            <View>
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Password"
                placeholderTextColor="#ff0000"
                secureTextEntry={secureTextEntry}
                style={styles.input}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 20,
                  top: 0,
                  bottom: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={toggleSecureTextEntry}
              >
                <Text>View</Text>
              </TouchableOpacity>
            </View>

          </SafeAreaView>
        </View>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 10,
    height: 50,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    paddingHorizontal: 16,
    fontSize: 18,
    marginBottom: 10,
    color: '#212121',
    backgroundColor: '#fafafa',
  },
})
