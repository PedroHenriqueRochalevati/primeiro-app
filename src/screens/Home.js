import { StyleSheet, Image, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import Stories from '../components/Stories'
import Post from '../components/Post';
import postImage from '../assets/Foto1.jpg';
import PessoaProfile from '../assets/pessoa2.webp';
export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Stories />
      <Post
        profileName={"Fulano da Silva"}
        profileImage={PessoaProfile}
        postImage={postImage}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet euismod lorem, vel tristique nisl egestas nec. In rutrum nibh in quam suscipit mollis. In accumsan egestas tellus, id porttitor risus dictum non. "} />
      <Post
        profileName={"Fulano da Silva"}
        profileImage={PessoaProfile}
        postImage={postImage}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet euismod lorem, vel tristique nisl egestas nec. In rutrum nibh in quam suscipit mollis. In accumsan egestas tellus, id porttitor risus dictum non. "} />
      <Post
        profileName={"Fulano da Silva"}
        profileImage={PessoaProfile}
        postImage={postImage}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet euismod lorem, vel tristique nisl egestas nec. In rutrum nibh in quam suscipit mollis. In accumsan egestas tellus, id porttitor risus dictum non. "} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'afff',
    marginTop:35,
    padding:5,
    borderRadius:5,
  },
  borda:{
    borderBottomWidth: 1,
    opacity:5,
    marginVertical:8,
  
  },
  post: {
    marginVertical:10,
  },
});