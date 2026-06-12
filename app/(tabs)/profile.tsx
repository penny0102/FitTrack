import { StyleSheet, Text, View } from 'react-native'
import {Zap} from "lucide-react-native";
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function profile() {
  return (
    <SafeAreaView>
      <Zap color="#22C55E"/>
          <Text style={{color: "#22C55E", fontFamily: "Sprintura", fontSize: 20}}>
            Performanes
          </Text>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})