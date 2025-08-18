import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id == id);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Imagen del producto */}
      <View className="w-full h-80 bg-gray-100">
        <Image
          source={{ uri: product.image }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      {/* Header del producto */}
      <View className="bg-white px-5 py-6 border-b border-gray-100">
        <View className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full self-start mb-4">
          <Text className="text-white text-sm font-work-medium uppercase tracking-wide">
            {product.category}
          </Text>
        </View>

        <Text className="font-work-black text-3xl text-gray-800 leading-tight mb-2">
          {product.title}
        </Text>

        <Text className="text-4xl font-work-black text-primary mb-4">
          ${product.price.toFixed(2)}
        </Text>
      </View>

      {/* Descripción */}
      <View className="bg-white mx-4 mt-4 rounded-2xl p-6 shadow-sm border border-gray-100">
        <Text className="text-lg font-work-medium text-gray-800 mb-3">
          Descripción
        </Text>
        <Text className="text-gray-600 leading-relaxed text-base">
          {product.description}
        </Text>
      </View>

      {/* Información adicional */}
      <View className="bg-white mx-4 mt-4 rounded-2xl p-6 shadow-sm border border-gray-100">
        <Text className="text-lg font-work-medium text-gray-800 mb-4">
          Información del producto
        </Text>

        <View className="space-y-3">
          <View className="flex flex-row justify-between items-center py-2 border-b border-gray-100">
            <Text className="text-gray-600 font-work-medium">Categoría</Text>
            <Text className="text-gray-800 font-work-medium">
              {product.category}
            </Text>
          </View>

          <View className="flex flex-row justify-between items-center py-2 border-b border-gray-100">
            <Text className="text-gray-600 font-work-medium">
              ID del producto
            </Text>
            <Text className="text-gray-800 font-work-medium">
              #{product.id}
            </Text>
          </View>

          <View className="flex flex-row justify-between items-center py-2">
            <Text className="text-gray-600 font-work-medium">Precio</Text>
            <Text className="text-primary font-work-black text-lg">
              ${product.price.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>

      {/* Botón de acción */}
      <View className="px-4 py-6">
        <Pressable className="bg-primary py-4 rounded-2xl active:opacity-90">
          <Text className="text-white text-center font-work-medium text-lg">
            Agregar al carrito
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
