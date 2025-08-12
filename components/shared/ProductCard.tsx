import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const ProductCard = ({
  id,
  title,
  description,
  price,
  category,
  image,
}: ProductCardProps) => {
  return (
    <View className="mb-4 mx-2">
      <View className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Imagen del producto */}
        <View className="w-full h-48 bg-gray-100">
          <Image
            source={{ uri: image }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        {/* Header con categoría */}
        <View className="bg-gradient-to-r from-primary to-secondary px-4 py-2">
          <Text className="text-white text-sm font-work-medium uppercase tracking-wide">
            {category}
          </Text>
        </View>

        {/* Contenido principal */}
        <View className="p-5">
          {/* Título */}
          <Text className="text-xl font-work-black text-gray-800 mb-3 leading-tight">
            {title}
          </Text>

          {/* Descripción */}
          <Text className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {description}
          </Text>

          {/* Footer con precio y botón */}
          <View className="flex flex-row justify-between items-center">
            <View>
              <Text className="text-xs text-gray-500 font-work-medium uppercase tracking-wide">
                Precio
              </Text>
              <Text className="text-2xl font-work-black text-primary">
                ${price.toFixed(2)}
              </Text>
            </View>

            <Link href={`/(stack)/products/${id}`} asChild>
              <Pressable className="bg-primary px-6 py-3 rounded-full active:opacity-90">
                <Text className="text-white font-work-medium text-sm">
                  Ver detalles
                </Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
