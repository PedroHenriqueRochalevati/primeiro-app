import { StyleSheet,Image, TouchableOpacity } from "react-native";
export default function story ({iamge}){
    return(
        <TouchableOpacity>
        <Image source={Foto1} style={styles.story} />
      </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    story: { width: 100, height: 100, borderRadius: 50 }
})