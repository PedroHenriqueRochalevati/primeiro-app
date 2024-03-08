import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import PostImage from "../../assets/Foto1.jpg";

export default function MyPosts() {
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity>
          <MaterialIcons name="grid-on" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="movie-open-play-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="account-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.postsList}>
        <Image source={PostImage} style={styles.post} />
        <Image source={PostImage} style={styles.post} />
        <Image source={PostImage} style={styles.post} />
        <Image source={PostImage} style={styles.post} />
        <Image source={PostImage} style={styles.post} />
        <Image source={PostImage} style={styles.post} />
        <Image source={PostImage} style={styles.post} />
        <Image source={PostImage} style={styles.post} />
        <Image source={PostImage} style={styles.post} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  postsList: {
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  post: {
    width: "33.3%",
    borderWidth: 1,
    borderColor: "#ddd",
    height: 150,
  },
});
