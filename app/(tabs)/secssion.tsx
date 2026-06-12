import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {Zap, Footprints, Grid3x2, Gauge, Flame, Pause, Square, Play } from "lucide-react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useRef, useEffect } from 'react';
import { router } from 'expo-router';
import { Pedometer } from "expo-sensors";
import { useStepsStore } from "@/script/useStepsStore";




export default function secssion() {
  const [seconds, setSeconds] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);
  const showCard = [1, 2, 3, 4]
  const steps = useStepsStore((state) => state.steps);
  const setSteps = useStepsStore((state) => state.setSteps);
  const [isClicked, setClick] = useState(false)

  useEffect(() => {
    // const getPermission = async () => {
    //   const { status } = await Pedometer.requestPermissionsAsync()
    //   if(!status) console.log("nonon")
    // }
    
    let subscription: Pedometer.Subscription | null = null;

    const start = async () => {
      const isAvailable = await Pedometer.isAvailableAsync();
      if (isAvailable) {
        
        subscription = Pedometer.watchStepCount((data) => {
          console.log(data.steps)
          setSteps(data.steps);
        });
        
      }
    };
    // getPermission()
    start();

    
  }, [steps]);

  const startTimer = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const reloadTimer = () =>{
    stopTimer()
    setSeconds(0)
  }

  const stopTimer = () => {
    
    clearInterval(intervalRef.current);
    intervalRef.current = null;
   
  };

  const formatTime = (totalSeconds: number) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");

    return `${hours}:${minutes}:${secs}`;
  };
 
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
          {formatTime(seconds)}
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
                  0.0
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
                  0.0
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
              steps
            </Text>
            <View style={{flexDirection: "row", gap: 7}}>
              <Text style={{fontSize: 30, color: "#d4d4d4", justifyContent: "center"}}>
                {steps} 
              </Text>
            </View>
        </View>
      </View>
      <View style={{flexDirection: "row", gap:20, top: "20%"}}>
        <TouchableOpacity style={styles.buttonCard} onPress={() => {
          
          {
            if(!isClicked) {
              setClick(true)
              startTimer()
            }else{
              setClick(false)
              stopTimer()
            }
          }
          

        }}>
          {isClicked ? (
            <Play size={20}/>
          ):(
            <Pause size={20}/>
          )}

        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStartButton} onPress={() => {
          reloadTimer()
          router.push("/")
          setClick(false)
          startTimer()
        }}>
          <Square size={20}/>
        </TouchableOpacity>
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
  },
  buttonCard: {
    backgroundColor: "#0566d9",
    marginTop: 40,
    padding: 20,
    borderRadius: 8,
    width: "70%", shadowColor: "#000",
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 3.0,
    shadowRadius: 4,
    elevation: 100,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  buttonStartButton: {
    backgroundColor: "#93000a",
    marginTop: 40,
    padding: 20,
    borderRadius: 8,
    width: "24%", shadowColor: "#000",
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 3.0,
    shadowRadius: 4,
    elevation: 100,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  }
})