import { useQuery, gql } from '@apollo/client'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
const GET_TOP_GAMES = gql`
  query getTopGames {
    games {
      name
      id
      background_image
    }
  }
`

const TopGame = () => {
  const { data, loading, error } = useQuery(GET_TOP_GAMES)
  return (
    <View>
      <Text className="text-xl">Top Games</Text>
      <View>
        {loading && <Text>Loading..</Text>}
        {error && <Text>error</Text>}
        {data && (
          <ScrollView horizontal={true}>
            {data.games.map((item) => (
              <View key={item.id} style={style.card}>
                <Image
                  style={style.image}
                  // className="absolute inset-0"
                  // source={require(""+item.background_image)}
                 source={{ uri: item.background_image }}
                />

                <Text className="absolute inset-x-0 bottom-0 text-white text-center p-5 text-lg ">
                  {item.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  )
}

export default TopGame

const style = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    marginHorizontal: 5,
    width: 150,
    height: 200,
    position: 'relative',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#9381ff',
  },
  image: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 30,
  },
})
