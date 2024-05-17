import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.content}></View>
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={44} color="white" />
        <FontAwesome name="gear" size={40} color="white" />
      </View>
      <View style={styles.card}></View>
      <ScrollView 
      style={styles.footerContentScrollView} showsHorizontalScrollIndicator={false} horizontal={true}>
      <View style={styles.footerCard}></View>
      <View style={styles.footerCard}></View>
      <View style={styles.footerCard}></View>
     
      
      </ScrollView>
    </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#032443',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  content: { paddingHorizontal: 30

  },

  header: {
    width:"100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,

  },

  card: {
    width: "100%",
    height: 190,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 30,
    elevation: 5,
    
  
  },

  footerCard: {
    width: 100,
    height: 127,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 10,
  
   
  },

  footerContentScrollView: {
  height: 400,
  }

  
});
