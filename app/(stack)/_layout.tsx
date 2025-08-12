import { products } from "@/store/products.store";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Categorías",
          headerStyle: {
            backgroundColor: "#49129C", // primary color
          },
          headerTintColor: "white", // color del texto del título
        }}
      />
      <Stack.Screen
        name="products/category/[category]"
        options={({ route }) => {
          const { category } = route.params as any;
          return {
            title: category || "Categoría",
            headerStyle: {
              backgroundColor: "#49129C", // primary color
            },
            headerTintColor: "white", // color del texto del título
          };
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
          headerStyle: {
            backgroundColor: "#B40086", // secondary color
          },
          headerTintColor: "white", // color del texto del título
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Ajustes Pantalla",
          headerStyle: {
            backgroundColor: "#EF2967", // tertiary color
          },
          headerTintColor: "white", // color del texto del título
        }}
      />
      <Stack.Screen
        name="products/[id]"
        options={({ route }) => {
          const { id } = route.params as any;
          const product = products.find((p) => p.id === id);
          return {
            title: product?.category || "Detalles del Producto",
            headerStyle: {
              backgroundColor: "#49129C", // primary color
            },
            headerTintColor: "white", // color del texto del título
          };
        }}
      />
    </Stack>
  );
};
export default StackLayout;
