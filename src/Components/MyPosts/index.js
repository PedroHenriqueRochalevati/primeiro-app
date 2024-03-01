import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { } from '@expo/vector-icons';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function MyPosts() {
    return (
        <View>
            <View style={styles.edit}>
                <TouchableOpacity>
                    <MaterialIcons name="grid-on" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="movie-open-play-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="account outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <Image source={PostImage} style={styles.post} />
                <Image sources={PostImage} style={styles.post} />
                <Image scurce={PostImage} style={styles.post} />
                <Image souree={PostImage} style={styles.post} />
                <Image source={PostImage} style={styles.post} />
                <Image source={PostImage} style={styles.post} />
                <Image sources={PostImage} style={styles.post} />
                <Image source={PostImage} style={styles.post} />
                <Image sources={PostImage} style={styles.post} />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:16,
    },
    postsList:{
        marginTop:16,
        flexDirection: "row"
    },
    tabs: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    post:{
        width: "33.3%",
        borderWidth:1,
        borderColor: "ddd",
        height: 150,
    }
    
})

