import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Foto1 from "../../assets/Foto1.webp";
import Story from "../Story/Index";

export default function Stories() {
  return (
    <ScrollView
      contentContainerStyle={{ height: 100, gap: 8 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Story image={Foto1} />
      <Story image={Foto1} />
      <Story image={Foto1} />
      <Story image={Foto1} />
      <Story image={Foto1} />
      <Story image={Foto1} />
      <Story image={Foto1} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  edit: {
    flexDirection: "row",
    padding: 10,
    gap: 5,
  },
});
