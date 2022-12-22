import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

//Components
import SignIn from '../components/Account/SignIn'
import SignUp from '../components/Account/SignUp'

const AccountAcitivty = () => {
  const [isSignIn, setIsSign] = useState(false)

  const [isSignInClick, setIsSignInClick] = useState(true)
  const [isSignUpClick, setIsSignUpClick] = useState(false)

  return (
    <View className="bg-primary-700 h-screen mt-8 px-2">
      {!isSignIn && (
        <View>
          {isSignInClick && (
            <View>
              <SignIn />
            </View>
          )}

          {isSignUpClick && (
            <VieW>
              <SignUp />
            </VieW>
          )}
        </View>
      )}
    </View>
  )
}

export default AccountAcitivty

const style = StyleSheet.create({})
