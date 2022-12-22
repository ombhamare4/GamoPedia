import { useQuery, gql } from '@apollo/client'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import TopGame from '../components/TopGames/TopGame'
const genre_list = [
  {
    id: 1,
    title: 'Action',
  },
  {
    id: 2,
    title: 'Adventure',
  },
  {
    id: 3,
    title: 'Horror',
  },
  {
    id: 4,
    title: 'RPG',
  },
  {
    id: 5,
    title: 'Racing',
  },
]
const GET_GENRES = gql`
  query GetGenres {
    genres {
      name
      id
      image_background
      games_count
    }
  }
`

const HomeActivity = () => {
  const { data, loading, error } = useQuery(GET_GENRES)

  return (
    <View className="bg-primary-700 h-screen mt-8 px-2">
      <Text className="text-5xl font-bold  py-2">GamoPedia</Text>
      <Text>Hi User</Text>
      <View className="my-2">
        <Text className="text-xl">Genre</Text>
        {loading && <Text>Loading..</Text>}
        {error && <Text>error</Text>}
        {data && (
          <ScrollView horizontal={true}>
            <View className="mt-2 flex-1 flex-row">
              {data.genres.map((item) => (
                <View style={styles.genreButton} key={item.id}>
                  <Text className="text-white text-lg text-center">
                    {item.name}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        )}
      </View>
      <ScrollView className="mb-20">
        <View className="my-2">
          <TopGame />
        </View>
        <View className="my-2">
          <TopGame />
        </View>
        <View className="my-2">
          <TopGame />
        </View>
        <View className="my-2">
          <TopGame />
        </View>
        <View className="my-2">
          <TopGame />
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeActivity

const styles = StyleSheet.create({
  genreButton: {
    backgroundColor: 'black',
    borderRadius: 50,
    padding: 5,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
})
