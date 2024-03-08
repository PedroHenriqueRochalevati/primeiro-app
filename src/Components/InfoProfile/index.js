import { StyleSheet, Text, View, Image } from "react-native";

export default function infoProfile({ image, publi, followers, following }) {
  return (
    <View>
      <Image source={image} style={styles.story} />
      <View>
        <Text style={styles.publi}>{publi}</Text>
        <Text style={styles.followers}>{followers}</Text>
        <Text style={styles.following}>{following}</Text>
        <Text style={styles.publicacoes}>publicacoes</Text>
        <Text style={styles.seguidores}>seguidores</Text>
        <Text style={styles.seguindo}>seguindo</Text>
        <Text style={styles.nome}>Pedro Levati</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  story: { width: 100, height: 100, borderRadius: 50 },
  publi: {
    marginLeft: 140,
    fontSize: 20,
    marginVertical: -50,
    height: 100,
    width: 110,
  },
  followers: {
    marginLeft: 230,
    fontSize: 20,
    marginVertical: -50,
    height: 100,
    width: 110,
  },
  following: {
    marginLeft: 330,
    fontSize: 20,
    marginVertical: -50,
    height: 100,
    width: 110,
  },
  publicacoes: {
    marginLeft: 115,
    fontSize: 15,
    marginVertical: -20,
    height: 70,
    width: 100,
  },
  seguidores: {
    marginLeft: 210,
    fontSize: 15,
    marginVertical: -50,
    height: 70,
    width: 100,
  },
  seguindo: {
    marginLeft: 315,
    fontSize: 15,
    marginVertical: -20,
    height: 70,
    width: 100,
  },
  nome: { fontSize: 20, marginVertical: -20 },
  descricao: { FontSize: 17, marginVertical: 20 },
});
