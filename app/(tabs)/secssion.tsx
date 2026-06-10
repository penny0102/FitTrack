import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {Zap, Footprints, Grid3x2, Gauge, Flame } from "lucide-react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function secssion() {
  return (
    <SafeAreaView style={{
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
      backgroundColor: "#0e150e"
    }}>
      <View style={{flexDirection: "row", gap: 7}}>
        <Zap color="#22C55E"/>
        <Text style={{color: "#22C55E", fontFamily: "Sprintura", fontSize: 20}}>
          Active Session
        </Text>
      </View>
      <View style={{alignItems: "center", marginTop: 35}}>
        <Text style={{
          color: "#22C55E", 
          textShadowColor: "#22C55E",
          textShadowOffset: { width: 0, height: 0 },
          textShadowRadius: 10,
          fontSize: 80,
          fontFamily: "Sprintura"
        }}>
          10:20:99
        </Text>
        <View style={{
          flexDirection: "row",
          gap: 38,
          marginTop: 20
        }}> 
          <View style={styles.cardStyles}>
            <Grid3x2 size={20} color="#22C55E"/>
            <Text style={{color: "#9b9b9b", paddingTop: 5}}>
                Distance
              </Text>
            <View style={{paddingTop: 0}}>
              <View style={{flexDirection: "row", gap: 7}}>
                <Text style={{fontSize: 35}}>
                  4.5
                </Text>
                <Text style={{marginTop: 23}}>
                  km
                </Text>
              </View>
            </View>
            
          </View>
          <View style={styles.cardStyles}>
            <Gauge  size={20} color="#a4bff8"/>
            <Text style={{color: "#9b9b9b", paddingTop: 5}}>
                Avg. Speed
            </Text>
            <View style={{paddingTop: 0}}>
              
              
              <View style={{flexDirection: "row", gap: 7}}>
                <Text style={{fontSize: 35}}>
                  4.5
                </Text>
                <Text style={{marginTop: 23}}>
                  km/h
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{flexDirection: "row", gap: 38}}>
        <View style={styles.cardStyles}>
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
          <View style={styles.cardStyles}>
            <Footprints color="#ffaf9b" size={20}/>
            <Text style={{paddingTop: 5, color: "#9b9b9b"}}>
              Calories
            </Text>
            <View style={{flexDirection: "row", gap: 7}}>
              <Text style={{fontSize: 30, color: "#d4d4d4", justifyContent: "center"}}>
                240 
              </Text>
              {/* <Text style={{paddingTop: 16}}>
              </Text> */}
            </View>
        </View>
      </View>
    
      
      
      
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  cardStyles: {
    backgroundColor: "#242c24",
    marginTop:  20,
    borderRadius: 15,
    width: "45%",
    paddingTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 0,
    shadowColor: "#000",
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 3.0,
    shadowRadius: 4,
    elevation: 100
  }
})