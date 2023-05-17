import { StatusBar } from 'expo-status-bar'
// import { StyleSheet, Text, View } from 'react-native'
import { Text, View } from 'react-native'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Hello World</Text>
    //   <StatusBar style="auto" />
    // </View>

    <View className="flex-1 items-center justify-center bg-zinc-950">
      <Text className="text-5xl font-bold text-zinc-50">Olá Milene!</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   text: {
//     color: '#fff',
//     fontSize: 48,
//     fontWeight: '700'
//   }
// });
