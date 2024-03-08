import { StyleSheet, View } from "react-native";
import InfoProfile from "../components/InfoProfile";
import PessoaProfile from "../assets/Foto1.jpg";
import MyPosts from "../components/MyPosts";

export default function Profile() {
  return (
    <View style={styles.container}>
      <InfoProfile
        image={PessoaProfile}
        publi={11}
        followers={420}
        following={300}
      />
      <MyPosts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 35,
  },
  fotos: {
    flexDirection: "row",
    gap: 16,
  },
});
