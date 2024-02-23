import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Logo from "../../assets/instagram-logo.png";
import { Entypo, FontAwesome } from '@expo/vector-icons';

 export default function Header(){
    return(
        <View style={styles.header}>
        <Image style={{ width: 200, height: 60 }} source={Logo} />
        <StatusBar style="auto" />
        <View style={styles.edit}>
          <TouchableOpacity>
            <Entypo name="heart-outlined" size={35} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="location-arrow" size={35} color="black" />
          </TouchableOpacity>
        </View>
      </View>
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
  