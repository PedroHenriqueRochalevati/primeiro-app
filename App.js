import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import InfoProfile from './src/components/InfoProfile';
import PessoaProfile from "./src/assets/Foto1.jpg";
export default function App() {
  return (
    <View style={styles.container}>
      <InfoProfile 
      image={PessoaProfile} 
      publi={11} 
      followers={420} 
      following={300} 
      descricao={"Nutrição"} />
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

