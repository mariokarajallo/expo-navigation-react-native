import CustomDrawer from "@/components/shared/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: "rgba(0, 0, 0, 0.5)",
        drawerActiveBackgroundColor: "rgba(0, 0, 0, 0.5)",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "indigo",
        // sceneContainerStyle: {
        //   backgroundColor: "white",
        // },
        headerShadowVisible: false,
        // headerShown: false,
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          drawerLabel: "Productos",
          title: "Productos",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
        // initialParams={{
        //   name: "Home",
        // }}
      />
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: "Usuario",
          title: "Usuario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: "Horario",
          title: "Horario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
