import { getCategories } from "@/store/products.store";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";

const ProductsScreen = () => {
  const categories = getCategories();

  return (
    <View className="flex flex-1 px-4">
      {/* <Text className="text-3xl font-work-black mb-6 mt-4">Categorías</Text> */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View className="mt-4 p-4 bg-gray-50 rounded-lg">
            <Link href={`/tabs/(stack)/products/category/${item}`}>
              <Text className="text-xl font-work-medium">{item}</Text>
            </Link>
          </View>
        )}
      />
    </View>
  );
};
export default ProductsScreen;
