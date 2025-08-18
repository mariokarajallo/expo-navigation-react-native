# ️ Expo Navigation - Tienda de Productos Tecnológicos

Una aplicación móvil moderna desarrollada con **React Native** y **Expo Router** que demuestra implementaciones avanzadas de navegación, incluyendo Drawer, Tabs y Stack Navigation. La aplicación presenta una tienda de productos tecnológicos con categorías como Sonido, Wearables, Smartphones y Computadoras.

## 📱 Características Principales

- **Navegación Compleja**: Implementación de Drawer + Tabs + Stack Navigation
- **Diseño Moderno**: UI/UX con Tailwind CSS (NativeWind) y fuentes personalizadas
- **Gestión de Estado**: Store centralizado para productos
- **Tipado Completo**: TypeScript para mejor desarrollo
- **Componentes Reutilizables**: Sistema de componentes modulares
- **Navegación por Archivos**: Routing basado en archivos con Expo Router

## 🏗️ Arquitectura del Proyecto

```
expo-navigation/
├── app/                          # Navegación basada en archivos
│   ├── (drawer)/                 # Navegación Drawer
│   │   ├── (tabs)/              # Navegación Tabs
│   │   │   ├── (stack)/         # Navegación Stack
│   │   │   │   ├── home/        # Pantalla de inicio
│   │   │   │   ├── products/    # Productos y categorías
│   │   │   │   ├── profile/     # Perfil de usuario
│   │   │   │   └── settings/    # Configuraciones
│   │   │   ├── favorites/       # Favoritos
│   │   │   └── home/           # Home alternativo
│   │   ├── schedule/           # Horarios
│   │   └── user/               # Usuario
├── components/shared/           # Componentes reutilizables
├── store/                      # Gestión de estado
└── assets/                     # Recursos estáticos
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **Expo CLI** (`npm install -g @expo/cli`)
- **Expo Go** (para pruebas en dispositivo móvil)

### Paso 1: Clonar el Repositorio

```bash
git clone <tu-repositorio>
cd expo-navigation
```

### Paso 2: Instalar Dependencias

```bash
npm install
```

### Paso 3: Configurar Variables de Entorno

El proyecto no requiere variables de entorno adicionales para funcionar, pero puedes configurar:

```bash
# Crear archivo .env si es necesario
touch .env
```

### Paso 4: Ejecutar la Aplicación

```bash
# Iniciar el servidor de desarrollo
npx expo start

# O usar los scripts predefinidos
npm run start
```

## 📱 Opciones de Ejecución

Una vez iniciado el servidor, tendrás las siguientes opciones:

- ** Expo Go**: Escanea el código QR con la app Expo Go
- **🤖 Android Emulator**: Presiona `a` para abrir en emulador Android
- **🍎 iOS Simulator**: Presiona `i` para abrir en simulador iOS
- ** Web**: Presiona `w` para abrir en navegador web

## 🎨 Tecnologías Utilizadas

### Frontend

- **React Native** (0.79.5) - Framework móvil
- **Expo** (53.0.20) - Plataforma de desarrollo
- **TypeScript** (5.8.3) - Tipado estático

### Navegación

- **Expo Router** (5.1.4) - Routing basado en archivos
- **React Navigation** - Navegación nativa
  - Drawer Navigation
  - Tab Navigation
  - Stack Navigation

### Estilos

- **NativeWind** (4.1.23) - Tailwind CSS para React Native
- **Tailwind CSS** (3.4.17) - Framework de utilidades CSS

### Fuentes Personalizadas

- **WorkSans-Black** - Títulos principales
- **WorkSans-Medium** - Texto secundario
- **WorkSans-Light** - Texto ligero

## 🎯 Funcionalidades

### 1. Navegación Principal

- **Drawer Navigation**: Menú lateral con acceso a todas las secciones
- **Tab Navigation**: Navegación inferior con Home, Stack y Favoritos
- **Stack Navigation**: Navegación entre pantallas relacionadas

### 2. Gestión de Productos

- **Categorías**: Sonido, Wearables, Smartphones, Computadoras
- **Listado de Productos**: Vista en grid con tarjetas informativas
- **Detalles de Producto**: Página individual con información completa
- **Navegación por Categorías**: Filtrado dinámico de productos

### 3. Componentes Reutilizables

- **ProductCard**: Tarjeta de producto con imagen, título, precio y botón
- **CustomButton**: Botón personalizable con diferentes variantes
- **CustomDrawer**: Drawer personalizado con diseño único

### 4. Sistema de Colores

- **Primary**: #49129C (Morado principal)
- **Secondary**: #B40086 (Rosa secundario)
- **Tertiary**: #EF2967 (Rosa terciario)

## Estructura de Archivos Detallada

### Navegación (`app/`)

```
app/
├── _layout.tsx                 # Layout raíz con fuentes y configuración
├── (drawer)/
│   ├── _layout.tsx            # Configuración del Drawer
│   ├── (tabs)/
│   │   ├── _layout.tsx        # Configuración de Tabs
│   │   ├── (stack)/
│   │   │   ├── _layout.tsx    # Configuración de Stack
│   │   │   ├── home/index.tsx # Pantalla de inicio
│   │   │   ├── products/
│   │   │   │   ├── index.tsx  # Lista de categorías
│   │   │   │   ├── [id].tsx   # Detalle de producto
│   │   │   │   └── category/
│   │   │   │       └── [category].tsx # Productos por categoría
│   │   │   ├── profile/index.tsx
│   │   │   └── settings/index.tsx
│   │   ├── favorites/index.tsx
│   │   └── home/index.tsx
│   ├── schedule/index.tsx
│   └── user/index.tsx
```

### Componentes (`components/shared/`)

- **CustomButton.tsx**: Botón reutilizable con variantes
- **CustomDrawer.tsx**: Drawer personalizado
- **ProductCard.tsx**: Tarjeta de producto

### Estado (`store/`)

- **products.store.ts**: Datos de productos y funciones de utilidad

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm start          # Inicia el servidor de desarrollo
npm run android    # Ejecuta en emulador Android
npm run ios        # Ejecuta en simulador iOS
npm run web        # Ejecuta en navegador web

# Linting
npm run lint       # Ejecuta ESLint

# Utilidades
npm run reset-project  # Resetea el proyecto a estado inicial
```

## 🎨 Personalización

### Colores

Los colores se pueden modificar en `tailwind.config.js`:

```javascript
colors: {
  primary: "#49129C",
  secondary: {
    DEFAULT: "#B40086",
    100: "#C51297",
    200: "#831266",
  },
  tertiary: "#EF2967",
}
```

### Fuentes

Las fuentes personalizadas se configuran en `app/_layout.tsx`:

```javascript
const [fontsLoaded, error] = useFonts({
  "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
  "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
  "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
});
```

## 📱 Compatibilidad

- **iOS**: 13.0+
- **Android**: API 21+
- **Web**: Navegadores modernos
- **Expo SDK**: 53.0.20

## Solución de Problemas

### Error de Fuentes

Si las fuentes no cargan correctamente:

```bash
npx expo install expo-font
```

### Error de Navegación

Si hay problemas con la navegación:

```bash
npx expo install expo-router
```

### Error de NativeWind

Si los estilos no se aplican:

```bash
npm install nativewind
npm install --save-dev tailwindcss
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## ‍ Autor

**Tu Nombre**

- GitHub: [@tu-usuario](https://github.com/tu-usuario)

## Agradecimientos

- [Expo](https://expo.dev) por la plataforma de desarrollo
- [React Navigation](https://reactnavigation.org) por la navegación
- [NativeWind](https://www.nativewind.dev) por los estilos
- [Tailwind CSS](https://tailwindcss.com) por el framework de utilidades

---

⭐ **¡No olvides dar una estrella al proyecto si te fue útil!**
