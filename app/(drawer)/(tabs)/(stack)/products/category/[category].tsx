import ProductCard from "@/components/shared/ProductCard";
import { getProductsByCategory } from "@/store/products.store";
import { useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";

const CategoryProductsScreen = () => {
  const { category } = useLocalSearchParams();
  const categoryProducts = getProductsByCategory(category as string);

  return (
    <View className="flex flex-1 bg-gray-50">
      {/* Header de la categoría */}
      <View className="bg-white px-4 py-6 border-b border-gray-100">
        <Text className="text-2xl font-work-black text-gray-800">
          {category}
        </Text>
        <Text className="text-gray-600 mt-1">
          {categoryProducts.length} productos disponibles
        </Text>
      </View>

      {/* Lista de productos */}
      <FlatList
        data={categoryProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 16 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            category={item.category}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

export default CategoryProductsScreen;
