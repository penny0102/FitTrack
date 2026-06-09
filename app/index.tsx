import { Text, View, StyleSheet } from "react-native";
import {Zap } from "lucide-react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: "#0f172a"

      }}
    >
      <View style={{flexDirection: "row", gap:7}}>
        <Zap color="#22C55E"/>
        <Text style={{color: "#22C55E", fontFamily: "Sprintura", fontSize: 20}}>
          Performanes
        </Text>
      </View>
      <View style={styles.cardStyle}>
        <Text>
          
        </Text>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: "#1e293b",
      // opacity: 0.5
      borderRadius: 20,
      borderWidth: 1,
      borderColor: 'black',
      marginTop: 50,
      width: "100%",
      alignSelf: "center",
      paddingHorizontal: 15,
      paddingTop: 10,
      paddingBottom: 40,
      shadowColor: "#000",
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 3.0,
      shadowRadius: 4,
      elevation: 100
  }
})