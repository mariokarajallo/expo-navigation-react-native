import { products } from "@/store/products.store";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { Stack, useNavigation, useRouter } from "expo-router";

const StackLayout = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
    if (canGoBack) {
      router.back();
    } else {
      navigation.dispatch(DrawerActions.openDrawer);
    }
  };

  return (
    <Stack
      screenOptions={{
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back" : "menu"}
            color={tintColor}
            size={24}
            onPress={() => onHeaderLeftClick(canGoBack)}
          />
        ),
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
