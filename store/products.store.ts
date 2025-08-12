export const products = [
  // CATEGORÍA: SONIDO
  {
    id: '1',
    title: 'Auriculares Inalámbricos Premium',
    description:
      'Experimenta una calidad de sonido premium con estos auriculares inalámbricos. Diseñados para la comodidad y el uso prolongado, son perfectos para amantes de la música y profesionales por igual.',
    price: 129.99,
    category: 'Sonido',
    image: 'https://picsum.photos/400/300?random=1',
  },
  {
    id: '2',
    title: 'Altavoz Bluetooth Portátil',
    description:
      'Portátil y potente, este altavoz Bluetooth ofrece un sonido claro y nítido donde quiera que vayas. Ideal para fiestas, actividades al aire libre y más.',
    price: 79.99,
    category: 'Sonido',
    image: 'https://picsum.photos/400/300?random=2',
  },
  {
    id: '3',
    title: 'Micrófono USB Profesional',
    description:
      'Micrófono USB de alta calidad para streaming, podcasting y grabación de voz. Incluye filtro anti-pop y soporte ajustable para una experiencia profesional.',
    price: 89.99,
    category: 'Sonido',
    image: 'https://picsum.photos/400/300?random=3',
  },

  // CATEGORÍA: WEARABLES
  {
    id: '4',
    title: 'Reloj Inteligente Deportivo',
    description:
      'Mantente conectado y sigue tu estado físico con este elegante y moderno reloj inteligente. Equipado con funciones como monitoreo de frecuencia cardíaca, GPS y más.',
    price: 199.99,
    category: 'Wearables',
    image: 'https://picsum.photos/400/300?random=4',
  },
  {
    id: '5',
    title: 'Pulsera de Actividad Fitness',
    description:
      'Pulsera inteligente que monitorea pasos, calorías, sueño y actividad física. Resistente al agua y con batería de larga duración para uso diario.',
    price: 49.99,
    category: 'Wearables',
    image: 'https://picsum.photos/400/300?random=5',
  },
  {
    id: '6',
    title: 'Gafas de Realidad Aumentada',
    description:
      'Gafas de realidad aumentada con pantalla transparente, control por gestos y conectividad Bluetooth. Perfectas para gaming, trabajo y entretenimiento.',
    price: 399.99,
    category: 'Wearables',
    image: 'https://picsum.photos/400/300?random=6',
  },

  // CATEGORÍA: SMARTPHONE
  {
    id: '7',
    title: 'Smartphone Ultra Pro',
    description:
      'Smartphone de última generación con cámara de 108MP, pantalla AMOLED de 6.7", procesador de alta velocidad y batería de 5000mAh con carga rápida.',
    price: 899.99,
    category: 'Smartphone',
    image: 'https://picsum.photos/400/300?random=7',
  },
  {
    id: '8',
    title: 'Smartphone Compacto',
    description:
      'Smartphone compacto y elegante con pantalla de 5.8", cámara dual de 48MP, procesador eficiente y diseño premium en aluminio y cristal.',
    price: 599.99,
    category: 'Smartphone',
    image: 'https://picsum.photos/400/300?random=8',
  },
  {
    id: '9',
    title: 'Smartphone Gaming',
    description:
      'Smartphone optimizado para gaming con pantalla de 120Hz, procesador gaming dedicado, sistema de refrigeración y controles táctiles avanzados.',
    price: 749.99,
    category: 'Smartphone',
    image: 'https://picsum.photos/400/300?random=9',
  },

  // CATEGORÍA: COMPUTADORAS
  {
    id: '10',
    title: 'Laptop Ultrabook',
    description:
      'Laptop ultrabook de 13" con procesador Intel i7, 16GB RAM, SSD de 512GB y pantalla táctil. Perfecta para trabajo y productividad profesional.',
    price: 1299.99,
    category: 'Computadoras',
    image: 'https://picsum.photos/400/300?random=10',
  },
  {
    id: '11',
    title: 'Desktop Gaming',
    description:
      'Computadora de escritorio para gaming con GPU RTX 4070, procesador AMD Ryzen 7, 32GB RAM y SSD de 1TB. Rendimiento excepcional para juegos AAA.',
    price: 1899.99,
    category: 'Computadoras',
    image: 'https://picsum.photos/400/300?random=11',
  },
  {
    id: '12',
    title: 'MacBook Air M2',
    description:
      'MacBook Air con chip M2, pantalla Liquid Retina de 13.6", 8GB RAM unificada y hasta 18 horas de batería. Diseño elegante y rendimiento excepcional.',
    price: 1199.99,
    category: 'Computadoras',
    image: 'https://picsum.photos/400/300?random=12',
  },
];

// Función para obtener categorías únicas
export const getCategories = () => {
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
};

// Función para obtener productos por categoría
export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};