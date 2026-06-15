import { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from 'react-native-safe-area-context';



export default function profile() {
  const [avatar, setAvatar] = useState(null);

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      quality: 0.8,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#242c24"}}>
        <View>
      <TouchableOpacity onPress={openCamera}>
        <Image
          source={
            avatar
              ? { uri: avatar }
              : require("@/assets/empty_profile_picture.jpg")
          }
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
          }}
        />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
    
  );
}