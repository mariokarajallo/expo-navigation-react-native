import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View className="flex justify-center items-center h-20 bg-primary rounded-b-3xl">
        <Text className="text-white text-2xl font-bold">React Native</Text>
      </View>

      {/* DrawerItemList es el componente que se encarga de renderizar los items de la lista de navegación */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
