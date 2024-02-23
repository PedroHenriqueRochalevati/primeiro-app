
import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Foto1 from "../../assets/Foto1.webp";
import Foto2 from "../../assets/Foto1.jpg";


export default function Stories() {
  return (
    <ScrollView
      contentContainerStyle={{ height: 100, gap: 8 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity>
        <Image source={Foto1} style={{ width: 100, height: 100, borderRadius: 50 }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={Foto2} style={{ width: 100, height: 100, borderRadius: 50 }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={Foto1} style={{ width: 100, height: 100, borderRadius: 50 }} />
      </TouchableOpacity>
      <Image source={Foto2} style={{ width: 100, height: 100, borderRadius: 50 }} />
      <TouchableOpacity>
        <Image source={Foto1} style={{ width: 100, height: 100, borderRadius: 50 }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={Foto2} style={{ width: 100, height: 100, borderRadius: 50 }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={Foto1} style={{ width: 100, height: 100, borderRadius: 50 }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={Foto2} style={{ width: 100, height: 100, borderRadius: 50 }} />
      </TouchableOpacity>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  edit: {
    flexDirection: 'row',
    padding: 10,
    gap: 5,
  }
});