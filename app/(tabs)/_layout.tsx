import { Tabs } from "expo-router";
import {User, LayoutDashboard } from "lucide-react-native";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, 
        tabBarBadgeStyle: {
          backgroundColor : "#1e293b",
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: "#22C55E",
       
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <LayoutDashboard color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <User  color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="secssion"
        options={{
          href: null,
          tabBarStyle: {
          display: "none",
        },
        }}
      />

      
    </Tabs>
  );
}