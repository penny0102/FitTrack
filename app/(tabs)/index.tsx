import { Text, View, StyleSheet, TouchableOpacity  } from "react-native";
import {Zap, Footprints, MapPinned, Flame, Play } from "lucide-react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import { router } from "expo-router";

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
          <View style={{flexDirection: "row", gap: 10}}>
            <Footprints color="#9b9b9b" size={20}/>
            <Text style={{color: "#9b9b9b"}}>
              STEPS TODAY
            </Text>
            
          </View>
          <Text style={{fontSize: 50, color: "#22C55E"}}>
              4522,5
          </Text>
            <View style={{paddingTop: 20}}>
              <Progress.Bar
                progress={0.9}
                width={300}
                height={12}
                borderRadius={10}
                color="#22C55E"
              />
              <Text style={{color: "#22C55E", paddingTop: 10}}>
                42%  Completed
              </Text>
            </View>
        </View>
        <View style={{flexDirection: "row", flexWrap: "wrap", gap: 35}}>
          <View style={styles.styleMiniCard}>
              <MapPinned color="#63a9f9" size={20}/>
              <Text style={{paddingTop: 5, color: "#9b9b9b"}}>
                Distance
              </Text>
              <View style={{flexDirection: "row", gap: 7}}>
                <Text style={{fontSize: 30, color: "#d4d4d4"}}>
                  32 
                </Text>
                <Text style={{paddingTop: 16}}>
                  km
                </Text>
              </View>
          </View>
          <View style={styles.styleMiniCard}>
              <Flame color="#f98163" size={20}/>
              <Text style={{paddingTop: 5, color: "#9b9b9b"}}>
                Calories
              </Text>
              <View style={{flexDirection: "row", gap: 7}}>
                <Text style={{fontSize: 30, color: "#d4d4d4"}}>
                  240 
                </Text>
                <Text style={{paddingTop: 16}}>
                  kcal
                </Text>
              </View>
          </View>
          <View style={styles.progracessStyle}>
              
              <Text style={{paddingTop: 2, color: "#9b9b9b"}}>
                Daily Goal Progress
              </Text>
              <View style={{flexDirection: "row", gap: 7}}>
                <Text style={{fontSize: 30, color: "#d4d4d4"}}>
                  100% Achieved
                </Text>
                
                  
              </View>
              <View style={{paddingTop: 5}}>
                  <Progress.Bar
                  progress={1}
                  width={300}
                  height={15}
                  color="#22C55E"
                />
                </View>
          </View>
        </View>
        <TouchableOpacity  style={styles.buttonStyle} onPress={() => router.push('/secssion')}>
          <Play color="#000000" size={20}/>
            <Text >
                Start Session
            </Text>
        </TouchableOpacity >
          
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
      paddingHorizontal: 15,
      paddingTop: 10,
      paddingBottom: 15,
      shadowColor: "#000",
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 3.0,
      shadowRadius: 4,
      elevation: 100
  },

  styleMiniCard: {
    backgroundColor: "#1e293b",
    marginTop:  20,
    borderRadius: 15,
    width: "45%",
    paddingTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 15,
    shadowColor: "#000",
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 3.0,
    shadowRadius: 4,
    elevation: 100
  },
  progracessStyle: {
    backgroundColor: "#1e293b",
    marginTop:  0,
    borderRadius: 15,
    width: "100%",
    paddingTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 15,
    shadowColor: "#000",
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 3.0,
    shadowRadius: 4,
    elevation: 100
  },
  buttonStyle: {
    backgroundColor: "#22C55E",
    marginTop: 40,
    paddingVertical: 15,
    borderRadius: 8,
    width: "100%", shadowColor: "#000",
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 3.0,
    shadowRadius: 4,
    elevation: 100,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    
  }
})