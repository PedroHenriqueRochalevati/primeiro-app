import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from "./src/components/Header";
import Stories from "./src/components/Stories";



export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Stories/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 35,
  },
  fotos: {
    flexDirection: 'row',
    gap: 16,
  }
});
