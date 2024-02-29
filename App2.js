import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from "./src/components/Header";
import Stories from "./src/components/Stories";

export default function App() {
    return (
        <View style={{
            flex: 1, 
            backgroundColor: '#fff', 
            marginVertical: 35, 
            marginHorizontal:16,
            }}>
            <Header/>
            <Stories/>
        </View>
    );
}